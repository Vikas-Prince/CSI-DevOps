FROM node:18-alpine

WORKDIR /app

COPY package/*.json .

RUN npm install

COPY . .

RUN npm install

EXPOSE 8080

CMD ["node", "server.js"]