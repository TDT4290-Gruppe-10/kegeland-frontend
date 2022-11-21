FROM node:14.17.1

WORKDIR /app

COPY . .

RUN npm ci 

RUN npm run build

RUN npm install -g serve

EXPOSE 3000

CMD [ "npx", "serve", "build" ]