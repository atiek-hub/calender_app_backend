FROM node:20

RUN npm i -g @nestjs/cli

WORKDIR /api

# 起動確認後下記のコメントアウトを外すことで、次回から自動で起動してくれる

COPY package*.json yarn.lock ./

RUN yarn

COPY . .

# Prisma Clientを生成
RUN npx prisma generate

RUN yarn build

CMD ["yarn", "start:dev"]
