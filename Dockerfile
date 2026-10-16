FROM node:24-alpine AS build

WORKDIR /usr/app

COPY ./ ./
RUN npm ci
RUN npm run build

FROM nginx:alpine AS production

COPY --from=build /usr/app/dist /usr/public
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80