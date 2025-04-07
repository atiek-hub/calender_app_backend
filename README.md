# Calendar app backend

## App 概要

1. カレンダーアプリケーションのバックエンド (フロントエンドのリポジトリ:https://github.com/atiek-hub/util-function/tree/calendar-function)

2. アーキテクチャ構成

   - BackEnd-API: NestJS

   - DB: MySQL

   - ORM： Prisma

## 環境構築
### 1.  Gitリポジトリをクローン
```bash
git clone <リポジトリのURL>
cd <プロジェクトフォルダ>
yarn install
```

### 2. 環境変数ファイルの準備
.envファイルをプロジェクトのルートに作成し、下記を記載
```bash
DATABASE_URL="mysql://root:root@nestjs-mysql:3306/nestjs-db"
```
### 3. Dockerコンテナの起動
以下のコマンドでコンテナをビルド＆起動
```bash
docker-compose up -d --build
```
これにより、NestJS アプリとデータベース（例: PostgreSQL, MySQL）が起動する。

### 4. Prisma のデータベース設定
以下のコマンドでデータベースをセットアップします。
```bash
docker-compose exec nest npx prisma migrate dev --name init
```

### 5. 動作確認
http://localhost:3000/  
上記に接続し、「Hello World！」が表示されていればOK


Postmanなどで下記のリクエストを送信し、201が帰ってくればOK  
POST http://localhost:3000/schedules  
body  
title:test  
start_date:2025-01-18T15:00:00.000Z  
end_date:2025-01-19T15:00:00.000Z  
