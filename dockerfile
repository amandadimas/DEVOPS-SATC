FROM node:20-alpine

WORKDIR /APP

COPY . .
WORKDIR /APP/calculadora
RUN npm install
RUN npm run build

EXPOSE 4173
CMD ["npm","run","preview"]