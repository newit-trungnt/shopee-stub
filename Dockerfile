FROM node:12-alpine
EXPOSE 3000:3000
WORKDIR /app
RUN npm install
ADD . .
CMD node server.js
