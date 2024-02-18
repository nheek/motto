# Stage 1: Build Stage
FROM node:21-alpine AS build

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./
COPY next.config.js ./

# Install dependencies
RUN npm install --only=production

# Copy the rest of the application code to the working directory
COPY . .

# Build the Next.js app
RUN npm run build

# Stage 2: Production Stage
FROM node:21-alpine AS production

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy built assets from the build stage
COPY --from=build /usr/src/app .

# Start MySQL server and wait for it to be ready, then run the app
CMD ["npm", "start"]