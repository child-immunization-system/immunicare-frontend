# Use the official Node.js image from the Docker Hub
FROM node:22-alpine

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json into the container
COPY package.json package-lock.json /app/

# Install the dependencies
RUN yarn install

# Copy the rest of the application code into the container
COPY . /app

# Build the React app
RUN yarn run build

# Install serve to serve the built app
RUN yarn install -g serve

# Expose the port that the app runs on
EXPOSE 80

# Command to run the appj
CMD ["serve", "-s", "build", "-l", "80"]