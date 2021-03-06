FROM node:8.4

# Create app directory
WORKDIR /app

# Install app dependencies
COPY package.json package-lock.json ./

RUN npm install

EXPOSE 3000

CMD [ "npm", "start" ]
