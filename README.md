# node server + grpc-web

based on https://github.com/otanu/hello-grpc-web.git

## Stack

- grpc-web
- react
- parcel
- typescript

## Run

Download `protoc-gen-grpc-web` and put under PATH https://github.com/grpc/grpc-web/releases

```bash
# generate type
./gen.sh

# Run envoy and server
docker-compose up -d

# Run client
cd client
yarn install
yarn start
```

## TODO

- Run client under docker
- next BFF server
- Fix types on generated files

## LICENSE

MIT
