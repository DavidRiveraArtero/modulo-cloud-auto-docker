FROM node:24-alpine AS base
RUN mkdir -p /usr/app
WORKDIR /usr/app

FROM base AS build-front
COPY ./ ./
RUN npm ci
RUN npm run build

FROM base AS relase
COPY --from=build-front /usr/app/dist ./public
COPY ./server/package.json ./
COPY ./server/package-lock.json ./
COPY ./server/index.js ./

RUN npm ci --omit=dev

ENV PORT=8083
CMD [ "node", "index.js" ] 