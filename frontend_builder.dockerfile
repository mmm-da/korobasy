FROM node:15-slim

COPY ./frontend ./

RUN npm install
