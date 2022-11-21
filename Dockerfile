FROM node:16-alpine

WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install --pure-lockfile

COPY . .

RUN yarn build

RUN yarn global add serve

EXPOSE 3000

CMD serve -s build