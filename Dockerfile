
FROM node:alpine
WORKDIR /app
COPY app/package.json /app/package.json
COPY app/yarn.lock /app/yarn.lock
ENV PATH /app/node_modules/.bin:$PATH
RUN yarn
CMD ["yarn", "start"]