# FROM node:14

# WORKDIR /usr/src/app/ui

# COPY package*.json ./
# COPY yarn.lock ./

# RUN yarn install

# # COPY ./components ./components
# # COPY ./hooks ./hooks
# # COPY ./interfaces ./interfaces
# # COPY ./public ./public
# # COPY ./pages ./pages
# # COPY ./utils ./utils
# # COPY ./.babelrc ./.babelrc
# # COPY ./.next.config.js ./.next.config.js
# # COPY ./next-env.d.ts ./next-env.d.ts
# # COPY ./tsconfig.json ./tsconfig.json
# COPY . .

# RUN yarn build

# EXPOSE 3000

# CMD ["yarn", "start"]

FROM node:16-alpine

WORKDIR /usr/src/app/ui

# Install dependencies based on the preferred package manager
COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./
RUN \
  [ -f package-lock.json ] && npm install || \
  [ -f pnpm-lock.yaml ] && yarn global add pnpm && pnpm install || \
  yarn install

COPY ./components ./components
COPY ./hooks ./hooks
COPY ./interfaces ./interfaces
COPY ./public ./public
COPY ./pages ./pages
COPY ./utils ./utils
COPY ./.babelrc ./.babelrc
COPY ./.next.config.js ./.next.config.js
COPY ./next-env.d.ts ./next-env.d.ts
COPY ./tsconfig.json ./tsconfig.json

CMD yarn dev