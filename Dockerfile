FROM node:alpine as build
WORKDIR /var/www/html
COPY . /var/www/html
USER root
RUN apk add autoconf \
    rsync \
    automake \
    bash \
    g++ \
    libc6-compat \
    libjpeg-turbo-dev \
    libpng-dev \
    make \
    nasm
RUN yarn global add gifsicle
RUN npm install pm2 -g