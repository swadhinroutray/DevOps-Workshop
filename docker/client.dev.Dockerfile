FROM node:alpine

WORKDIR /usr/src/client

COPY package*.json ./
RUN npm install

COPY . .
EXPOSE 3000

ENTRYPOINT ["npm" , "start"]