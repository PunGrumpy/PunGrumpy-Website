FROM node:19 AS builder
LABEL maintainer="PunGrumpy Homepage for production"

WORKDIR /home/node/app
COPY package.json ./

RUN npm install && \
    npm cache clean --force

COPY . .

RUN npm run build
