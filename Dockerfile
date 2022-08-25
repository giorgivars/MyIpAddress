FROM node:slim
COPY web.js .
COPY package.json .
RUN npm install
RUN rm -rf /usr/share/doc/ && rm -rf /usr/share/man && rm -rf /usr/share/locale/
EXPOSE 3000
CMD [ "npm", "start" ]
