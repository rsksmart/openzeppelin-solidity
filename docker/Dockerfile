FROM node:8-alpine

RUN apk add --no-cache git python make g++

WORKDIR /openzeppelin
ADD package.json /openzeppelin
ADD package-lock.json /openzeppelin

RUN npm ci

ADD . /openzeppelin
