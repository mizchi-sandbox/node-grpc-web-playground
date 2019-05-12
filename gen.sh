#!/bin/sh

# PROTOC_GEN_TS_PATH="./node_modules/.bin/protoc-gen-ts"
# CLIENT_OUTDIR=client/src/helloworld
# # SERVER_OUTPUT_DIR=server/helloworld

# mkdir -p ${CLIENT_OUTDIR} ${SERVER_OUTPUT_DIR}

# protoc \
#     --proto_path=protocol helloworld.proto \
#     # --plugin="protoc-gen-ts=${PROTOC_GEN_TS_PATH}" \
#     # --js_out=import_style=commonjs:${CLIENT_OUTDIR} \
#     # --ts_out="service=true:${CLIENT_OUTDIR}" \
#     --js_out=import_style=commonjs:${SERVER_OUTDIR} \
#     --grpc-web_out=import_style=typescript,mode=grpcwebtext:${CLIENT_OUTDIR}

# Path to this plugin
# PROTOC_GEN_TS_PATH="./node_modules/.bin/protoc-gen-ts"

# Directory to write generated code to (.js and .d.ts files)
# OUT_DIR="./out"

# protoc \
#     --plugin="protoc-gen-ts=${PROTOC_GEN_TS_PATH}" \
#     --js_out="import_style=commonjs,binary:${OUT_DIR}" \
#     --ts_out="service=true:${OUT_DIR}" \
#     protocol/helloworld.proto

OUTDIR=./client/src/gen
# OUTDIR=./out
rm -r ${OUTDIR}
mkdir -p ${OUTDIR}
protoc \
  --js_out=import_style=commonjs:${OUTDIR} \
  --grpc-web_out=import_style=typescript,mode=grpcwebtext:${OUTDIR} \
  protocol/helloworld.proto