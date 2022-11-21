FROM node:14.17.1

WORKDIR /app

COPY . .

RUN npm install --force

RUN npm run build

RUN npm install -g serve

EXPOSE 3000

CMD [ "npx", "serve", "build" ]