FROM node:20.9.0-alpine

RUN npm install -g @nestjs/cli@11.0.4

USER node

WORKDIR home/node/app

CMD [ "tail", "-f", "/dev/null" ]