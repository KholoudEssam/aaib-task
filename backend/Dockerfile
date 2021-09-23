FROM node:14.15-alpine3.13
WORKDIR /backend
COPY package*.json .
RUN npm install
COPY . .

CMD ["node","server.js"]

