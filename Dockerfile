FROM oven/bun:1.0.9-alpine AS dependencies
LABEL author="PunGrumpy"

WORKDIR /home/pungrumpy/app

COPY ./package.json ./bun.lockb /home/pungrumpy/app/

RUN cd /home/pungrumpy/app && bun install --ignore-scripts

FROM oven/bun:1.0.9-alpine AS builder
LABEL author="PunGrumpy"

WORKDIR /home/pungrumpy/app

COPY --from=dependencies /home/pungrumpy/app/node_modules ./node_modules

COPY . .

RUN bun run build

FROM oven/bun:1.0.9-alpine AS production
LABEL author="PunGrumpy"

ENV NODE_ENV=production

WORKDIR /home/pungrumpy/app

COPY --from=builder /home/pungrumpy/app/node_modules ./node_modules

COPY . .

RUN bun run build
