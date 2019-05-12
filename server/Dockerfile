FROM node:alpine

RUN apk add --no-cache tini yarn
WORKDIR /app
ENTRYPOINT ["/sbin/tini", "--"]

COPY ./server/package.json ./server/yarn.lock ./

RUN yarn install
COPY ./server .
COPY protocol /protocol

EXPOSE 9090
CMD [ "yarn", "start" ]
