// const path = require("path");
// const grpc = require("grpc");

// const PROTO_PATH = path.join(__dirname, "../protocol/helloworld.proto");
// const { helloworld } = grpc.load(PROTO_PATH);

// function sayHello(call, callback) {
//   callback(null, { message: "Hello " + call.request.name });
// }

// const server = new grpc.Server();
// server.addService(helloworld.Greeter.service, { sayHello });
// server.bind("0.0.0.0:9090", grpc.ServerCredentials.createInsecure());
// server.start();

const path = require("path");
const grpc = require("grpc");
const protoLoader = require("@grpc/proto-loader");

const PROTO_PATH = path.join(__dirname, "../protocol/helloworld.proto");

const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true
});
const hello_proto = grpc.loadPackageDefinition(packageDefinition).helloworld;

/**
 * Implements the SayHello RPC method.
 */
function sayHello(call, callback) {
  callback(null, { message: "Hello " + call.request.name });
}

/**
 * Starts an RPC server that receives requests for the Greeter service at the
 * sample server port
 */
function main() {
  const server = new grpc.Server();
  server.addService(hello_proto.Greeter.service, { sayHello: sayHello });
  server.bind("0.0.0.0:9090", grpc.ServerCredentials.createInsecure());
  server.start();
  console.log("server started: 9090");
}

main();
