
FROM node:alpine
WORKDIR /app
COPY package.json ./
COPY yarn.lock ./

RUN yarn install

# add app
COPY . ./

# start app
CMD ["yarn", "start"]