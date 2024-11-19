# Stage 1
FROM node:22-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . ./
RUN npm run build
CMD ["npx", "serve", "-s", "dist"]
