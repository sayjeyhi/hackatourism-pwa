FROM node:13.3.0-stretch
RUN apt-get update
RUN apt-get install -y libxtst6 libglu1-mesa
RUN npm install pm2 -g
RUN npm install express -g
RUN usermod -u 1000 node
RUN groupmod -g 1000 node
COPY build/. /home/node/build/
RUN mkdir /home/node/server
RUN chmod 777 -R /home/node/server
RUN chmod 777 -R /home/node/build/v2/server
WORKDIR /home/node/
USER node
CMD pm2-runtime start build/static/server/runner.js -i 0