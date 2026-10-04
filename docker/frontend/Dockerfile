FROM node:22-alpine

WORKDIR /app

COPY application/frontend/package*.json ./

RUN npm install

COPY application/frontend/ ./

EXPOSE 3000

CMD ["node", "server.js"]