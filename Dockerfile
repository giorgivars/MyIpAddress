FROM node
COPY web.js .
COPY package.json .
RUN npm install
EXPOSE 3000
CMD [ "npm", "start" ]
