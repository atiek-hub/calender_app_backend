# Calendar app backend

## App 概要

1. カレンダーアプリケーションのバックエンド (フロントエンドのリポジトリ:https://github.com/atiek-hub/util-function/tree/calendar-function)

2. アーキテクチャ構成

   - BackEnd-API: NestJS

   - DB: MySQL

   - ORM： Prisma

## 環境構築

### 1. ビルド

```bash
% docker compose up -d --build
% docker compose ps
```

### 2. Nestプロジェクトをdockerコンテナのワーキングディレクトリに作成

```bash
% docker compose exec nest nest new .

? Which package manager would you ❤️  to use? (Use arrow keys)
❯ npm
  yarn
  pnpm

→yarnを選択
```

### 3. 起動確認
```bash
% docker compose exec nest npm run start:dev
```
http://localhost:3000/
にアクセスして、Hello World!と表示されたら、起動成功。

DockerFileの下記のコメントアウトを外すことで次回からビルド時に自動起動できる
```bash
COPY package*.json /api/ 

RUN npm i
CMD [ "npm", "run", "start:dev"]
```

コメントアウトを外した後再ビルド
```bash
docker compose up -d --build
```
### 4. DBが作成されているか確認
.envファイルを作成し、下記を記載
```bash
DATABASE_URL="mysql://root:root@nestjs-mysql:3306/nestjs-db"
```
```bash
% docker compose up
```
MySQLの管理ツールphpmyadminのimageを入れたので
http://localhost:8080/
にアクセスすればDBの確認ができる。
「nestjs_demo」というDBができていれば成功。

### 5. Prismaを利用してMySQLと接続する
```bash
Prismaのパッケージをインストール
 % docker compose run nest npm install --save-dev prisma
```

```bash
Prismaの初期化
 % docker compose run nest npx prisma init
```
この時点で、prismaというフォルダが作成される。 prismaフォルダの中にschema.prismaがあり、
それを編集していくことで、DBのモデルを作成する。

### 6. prismaスキーマファイル編集
prisma/schema.prismaの内容をコピーする
デフォルトでは、datesource dbのプロバイダーがpostgresqlになっているので、mysqlに変更している

### 7. prismaスキーマファイルのマイグレート
```bash
 % docker compose run nest npx prisma migrate dev --name init
```
上記を実行後、マイグレーションファイルが作成される

### 8. PrismaClientのインストール
```
% docker compose run nest npm install @prisma/client
```
次回以降Prismaモデルを変更するたびにこのコマンドを実行し、生成されたPrismaクライアントを更新する必要がある。

### 9. Prisma Client service作成
```
docker-compose run nest nest generate service Prisma
```
PrismaClientのインスタンス化とデータベースへの接続を行うPrismaService
srcディレクトリ内にprisma.service.tsというファイルを新規に作成し、下記のコードを追加する。
```typescript
import { INestApplication, Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }

  async enableShutdownHooks(app: INestApplication) {
    this.$on('beforeExit', async () => {
      await app.close();
    });
  }
}
```
