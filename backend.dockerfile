FROM python:3.9.0-slim


RUN mkdir /app
WORKDIR /app

COPY . /app/
RUN pip install -r requirements.txt