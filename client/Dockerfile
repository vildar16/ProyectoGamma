FROM node:14

WORKDIR /app

COPY . /app


RUN npm install 

RUN npm i -g serve

RUN npm run build

EXPOSE 3333

CMD ["serve","-s","build"]