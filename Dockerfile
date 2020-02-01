FROM node:alpine as build
RUN apk add --no-cache \
    autoconf \
    automake \
    bash \
    g++ \
    libc6-compat \
    libjpeg-turbo-dev \
    libpng-dev \
    make \
    nasm
RUN npm i -g gifsicle
WORKDIR /var/www/html
COPY . /var/www/html
