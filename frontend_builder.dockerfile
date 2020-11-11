FROM node:15-slim

WORKDIR /app/frontend

COPY ./frontend ./

RUN npm install
