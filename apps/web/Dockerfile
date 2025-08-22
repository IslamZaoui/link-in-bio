FROM oven/bun:alpine AS base
WORKDIR /app

FROM base AS builder
RUN bun add -g turbo
COPY . .
RUN turbo prune web --docker

FROM base AS install
RUN mkdir -p /temp/dev
COPY --from=builder /app/out/json /temp/dev/
RUN cd /temp/dev && bun install

RUN mkdir -p /temp/prod
COPY --from=builder /app/out/json /temp/prod/
RUN cd /temp/prod && bun install --omit=dev


FROM base AS prerelease
COPY --from=install /temp/dev/node_modules node_modules
COPY --from=builder /app/out/full/ .
COPY --from=builder /app/out/bun.lock .
RUN bun turbo build --filter=web...

FROM base AS release
COPY --from=install /temp/prod/node_modules node_modules
COPY --from=prerelease /app/apps/web/build ./build

USER bun
ENV PORT=5173
EXPOSE 5173/tcp
CMD bun --bun build/index.js
