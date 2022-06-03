FROM node:14
ENV REACT_APP_API_CALL=api/
WORKDIR /app

COPY . /app


RUN npm install 

RUN npm i -g serve

RUN npm run build

EXPOSE 3000

CMD ["serve","-s","build"]