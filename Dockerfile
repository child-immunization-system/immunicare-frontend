# Use the official Node.js image from the Docker Hub
FROM node:22-alpine As build

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json into the container
COPY package.json package-lock.json /app/

# Install the dependencies
RUN yarn install

# Copy the rest of the application code into the container
COPY . /app

# Build the React app
RUN yarn build

# Stage 2: Create a lightweight production image
FROM node:16-alpine

# Stage 2: Serve the built app using an Nginx web server
FROM nginx:alpine

# Copy the built app from the previous stage to the Nginx web server's root directory
COPY --from=build /app/dist /usr/share/nginx/html

# Expose the default port for Nginx
EXPOSE 3000

# Start the Nginx server
CMD ["nginx", "-g", "daemon off;"]
