FROM node:19 AS builder
LABEL maintainer="PunGrumpy Homepage for production"

WORKDIR /home/node/app
COPY package*.json ./

RUN if [ -e yarn.lock ]; then yarn install --frozen-lockfile; elif [ -e package-lock.json ]; then npm ci; else npm install; fi

COPY . .

RUN npm run build
