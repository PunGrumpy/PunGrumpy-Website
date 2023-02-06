FROM node:19

WORKDIR /home/node/app

COPY package.json ./

RUN apt-get update && apt-get install -y curl && apt-get clean

RUN npm install && \
    npm cache clean --force

COPY . .

RUN npm run build