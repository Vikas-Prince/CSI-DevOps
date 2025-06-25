FROM node:18-alpine

WORKDIR /app

COPY package/*.json .

RUN npm install

COPY . .

RUN npm install

EXPOSE 3000

CMD ["node", "index.js"]
