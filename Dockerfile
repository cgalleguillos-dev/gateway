FROM node:16

WORKDIR /app

COPY . .

EXPOSE 3000

RUN npm install

RUN npm run build

CMD ["npm", "run", "start:prod"]