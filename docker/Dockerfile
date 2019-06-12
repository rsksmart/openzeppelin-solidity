FROM node:10-alpine

RUN apk add --no-cache autoconf automake build-base gifsicle git libjpeg-turbo-utils nasm optipng python

# https://github.com/OpenZeppelin/solidity-docgen/issues/29
RUN mkdir /openzeppelin
RUN chown node:node /openzeppelin
USER node

WORKDIR /openzeppelin
COPY ./ /openzeppelin/

RUN npm ci
# https://github.com/ethereum/web3.js/issues/1914
RUN npm i websocket

