FROM node:alpine

RUN apk add --no-cache tini yarn
WORKDIR /app
ENTRYPOINT ["/sbin/tini", "--"]

COPY ./server-node/package.json ./server-node/yarn.lock ./

RUN yarn install
COPY ./server-node .
COPY protocol /protocol

EXPOSE 9090
CMD [ "yarn", "start" ]
