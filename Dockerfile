FROM node:18.18.0

WORKDIR /

COPY package*.json ./

RUN npm install

COPY . .

CMD ["npm", "start"]