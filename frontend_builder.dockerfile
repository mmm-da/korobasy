FROM node:15-slim

COPY ./frontend /app

WORKDIR /app/
RUN npm install
