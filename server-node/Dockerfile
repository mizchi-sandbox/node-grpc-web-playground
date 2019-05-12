FROM node:alpine

RUN apk add --no-cache tini yarn

WORKDIR /app
# RUN chown -R node /app

USER node

ENTRYPOINT ["/sbin/tini", "--"]

COPY package.json yarn.lock ./

RUN yarn install
COPY . .

EXPOSE 9090
CMD [ "npm", "start" ]
