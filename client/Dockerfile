FROM node:14.15-alpine as build-step
WORKDIR /client
COPY package*.json .
RUN npm install
COPY . .
RUN npm run build


FROM nginx:1.17.1-alpine
COPY --from=build-step client/dist/client /usr/share/nginx/html 
