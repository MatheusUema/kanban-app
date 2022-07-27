FROM node:14

WORKDIR /usr/src/app/ui

COPY package*.json ./
COPY yarn.lock ./

RUN yarn install

# COPY ./components ./components
# COPY ./hooks ./hooks
# COPY ./interfaces ./interfaces
# COPY ./public ./public
# COPY ./pages ./pages
# COPY ./utils ./utils
# COPY ./.babelrc ./.babelrc
# COPY ./.next.config.js ./.next.config.js
# COPY ./next-env.d.ts ./next-env.d.ts
# COPY ./tsconfig.json ./tsconfig.json
COPY . .

RUN yarn build

EXPOSE 3000

CMD ["yarn", "start"]