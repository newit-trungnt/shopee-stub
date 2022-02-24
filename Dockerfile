FROM node:12-alpine
WORKDIR /app
RUN npm install
ADD . .
CMD node server.js
