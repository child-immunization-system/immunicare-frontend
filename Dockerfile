# Stage 1: Build the React app with Vite
FROM node:16 as build

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Build the React app
RUN npm run build

# Stage 2: Serve the built app using an Nginx web server
FROM nginx:alpine

# Copy the built app from the previous stage to the Nginx web server's root directory
COPY --from=build /app/dist /usr/share/nginx/html

# Expose the default port for Nginx
EXPOSE 3000

# Start the Nginx server
CMD ["nginx", "-g", "daemon off;"]
