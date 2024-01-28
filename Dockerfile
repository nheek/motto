# Use the official Node.js image as the base image
FROM node:21-alpine

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Build the Next.js application
RUN npm run build

# Expose the port that Next.js will run on
EXPOSE 3001

# Start the Next.js application
CMD ["npm", "start"]