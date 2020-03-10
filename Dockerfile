FROM node:10-alpine

ARG REACT_APP

ENV REACT_APP=$REACT_APP

WORKDIR /usr/src/app

COPY app/package*.json ./

RUN npm install --production

COPY app .

RUN npm run build \
  && npm install -g serve

EXPOSE 5000

CMD [ "serve", "-s", "build" ]
