FROM node:14

WORKDIR /usr/src/app/api

COPY package*.json ./
COPY yarn.lock ./

RUN yarn install

COPY ./index.js ./index.js
COPY ./.env ./.env

EXPOSE 5000

CMD ["yarn", "server"]