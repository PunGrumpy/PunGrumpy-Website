FROM node:19 AS builder
LABEL maintainer="PunGrumpy Homepage for production"

WORKDIR /home/node/app
COPY package*.json ./

RUN npm ci
COPY . .

RUN npm run build
