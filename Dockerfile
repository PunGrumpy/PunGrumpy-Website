FROM node:19 AS builder
LABEL author="PunGrumpy"
LABEL maintainer="PunGrumpy Homepage for production"

ENV NODE_ENV=production

WORKDIR /home/node/app

COPY package*.json ./

RUN npm ci

FROM node:19-alpine AS production
LABEL author="PunGrumpy"

ENV NODE_ENV=production

WORKDIR /home/node/app

COPY --from=builder /home/node/app/node_modules ./node_modules

COPY . .

RUN npm run build
