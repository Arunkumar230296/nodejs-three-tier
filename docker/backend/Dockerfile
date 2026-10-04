FROM node:22-alpine

WORKDIR /app

COPY application/backend/package*.json ./

RUN npm install

COPY application/backend/ ./

EXPOSE 3000

CMD ["node", "server.js"]