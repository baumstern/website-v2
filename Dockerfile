FROM node:18-alpine3.18 as builder
RUN apk add --no-cache git curl

WORKDIR /builder
COPY . .
RUN npm i -g pnpm
RUN pnpm install
RUN pnpm build

# Create image by copying build artifacts
FROM node:18-alpine3.18 as runner
RUN npm i -g pnpm

USER node
ARG PORT=3000

WORKDIR /home/node
COPY --chown=node:node  --from=builder /builder/ ./

EXPOSE ${PORT}
CMD ["pnpm", "start"]
