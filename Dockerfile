
FROM node:alpine
WORKDIR /pwa
COPY package.json /pwa/package.json
COPY yarn.lock /pwa/yarn.lock
ENV PATH /pwa/node_modules/.bin:$PATH
RUN yarn
CMD ["yarn", "start"]