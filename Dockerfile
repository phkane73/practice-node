
FROM node:18.1.0-alpine

ENV PORT ${PORT}

ENV MONGO_DB_URI ${DATABASE_URI}

COPY . /home/app

WORKDIR /home/app

RUN npm install

EXPOSE ${PORT}

CMD [ "node", "index.js" ]