FROM node:12

WORKDIR /app

COPY packege*json ./

RUN npm install

COPY . .

ENV PORT=808

EXPOSE 8080

CMD [ "npm", "start" ]