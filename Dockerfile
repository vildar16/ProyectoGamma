FROM node:14

WORKDIR /app

COPY . /app

RUN npm install


EXPOSE 5555 

CMD ["npm", "run", "start"]