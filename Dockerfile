# Stage 1: Build Stage
FROM node:21-alpine AS build
ARG OPEN_AI_API_KEY
ENV OPEN_AI_API_KEY=${OPEN_AI_API_KEY}
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM node:21-alpine AS production
WORKDIR /usr/src/app
COPY --from=build /usr/src/app .
CMD ["npm", "start"]