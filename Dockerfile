FROM node:20

RUN npm i -g @nestjs/cli

WORKDIR /api

# 起動確認後下記のコメントアウトを外すことで、次回から自動で起動してくれる

# COPY package*.json /api/

# RUN yarn install
# CMD ["yarn", "start:dev"]
