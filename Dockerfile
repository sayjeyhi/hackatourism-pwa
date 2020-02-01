FROM node:alpine as build
WORKDIR /var/www/app
COPY . /var/www/html
