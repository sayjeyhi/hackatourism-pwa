FROM node:alpine as build
WORKDIR /var/www/html
COPY . /var/www/html
RUN yarn global add  gifsicle
