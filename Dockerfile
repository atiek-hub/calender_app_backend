FROM node:20

RUN npm i -g @nestjs/cli

WORKDIR /api

COPY package*.json /api/

RUN yarn install
CMD ["yarn", "start:dev"]
