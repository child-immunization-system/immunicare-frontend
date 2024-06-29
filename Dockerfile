# Use the official Node.js image from the Docker Hub
FROM node:22-alpine As build

# Set the working directory in the container
WORKDIR /app

# Copy package.json and yarn.lock for dependency installation
COPY package.json yarn.lock ./

# Install the dependencies
RUN yarn install

# Copy the rest of the application code into the container
COPY . .

# Build the React app
RUN yarn build

# Stage 2: Create a lightweight production image
FROM node:16-alpine

WORKDIR /app
# Install serve to serve the built app
RUN yarn add -g serve
# Expose the port that the app runs on
EXPOSE 3000
# Command to run the app
CMD ["serve", "-s", "build", "-l", "3000"]