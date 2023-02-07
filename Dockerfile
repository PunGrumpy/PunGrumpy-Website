FROM node:19 AS dependencies
LABEL author="PunGrumpy"

WORKDIR /home/node/app

COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./

RUN \
  if [ -f yarn.lock ]; then yarn --frozen-lockfile; \
  elif [ -f package-lock.json ]; then npm ci; \
  elif [ -f pnpm-lock.yaml ]; then yarn global add pnpm && pnpm i --frozen-lockfile; \
  else echo "Lockfile not found." && exit 1; \
  fi

FROM node:19 AS builder
LABEL author="PunGrumpy"

WORKDIR /home/node/app

COPY --from=dependencies /home/node/app/node_modules ./node_modules

COPY . .

RUN npm run build

FROM node:19-alpine AS production
LABEL author="PunGrumpy"

ENV NODE_ENV=production

WORKDIR /home/node/app

COPY --from=builder /home/node/app/node_modules ./node_modules

COPY . .

RUN npm run build
