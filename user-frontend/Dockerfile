# frontend/Dockerfile

FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3030

ENV PORT=3030

CMD ["npm", "run", "dev"]
