FROM node:alpine as build
WORKDIR /var/www/html
COPY . /var/www/html
USER root
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
RUN yarn global add gifsicle
