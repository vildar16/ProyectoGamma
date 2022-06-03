FROM node:14
ENV JWT_SECRET=secretGamma
WORKDIR /app

COPY . /app

RUN npm install


EXPOSE 5000 

CMD ["npm", "run", "start"]