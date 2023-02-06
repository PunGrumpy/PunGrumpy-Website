### STAGE 1: Build ###
FROM node:19 AS builder
LABEL maintainer="PunGrumpy Homepage for production"

COPY package.json ./

RUN npm install && \
    npm cache clean --force

RUN mkdir /nextjs-app && \
    mv ./node_modules ./nextjs-app

WORKDIR /nextjs-app

COPY . .

RUN npm run build

### STAGE 2: Run ###
FROM nginx:1.23-alpine as runner

COPY ./.nginx/nginx.conf /etc/nginx/nginx.conf

RUN rm -rf /usr/share/nginx/html/*

COPY --from=builder /nextjs-app/out /usr/share/nginx/html