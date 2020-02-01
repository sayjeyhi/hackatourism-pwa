FROM node:alpine as build
RUN yarn global add  gifsicle
WORKDIR /var/www/html
COPY . /var/www/html
