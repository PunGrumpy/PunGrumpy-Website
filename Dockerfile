FROM node:19 AS builder
LABEL maintainer="PunGrumpy Homepage for production"

WORKDIR /home/node/app
COPY package*.json ./

RUN NODE_OPTIONS=--optimize_for_size npm ci
COPY . .

RUN NODE_OPTIONS=--optimize_for_size npm run build
