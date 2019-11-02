# Base image is Node LTS
# Specifying exact version here to avoid version issues
# Using alpine version to minimize the size of resulting image
FROM node:12.13.0-alpine

# Create application directory
WORKDIR /app

# Copy dependency specification files
# Wildcard used, to ensure that both
# package.json and package-lock.json are copied
COPY package*.json ./

# Install app dependencies
# Install only production dependencies (i.e. in package.json dependencies)
# This step will not change often, so will be cached by docker engine
RUN npm install --only=production

# Copy app sources to image
COPY ./src ./src

# Expose port, at which running container will listen for requests
EXPOSE 80

# This command will be used to start application when
# container will be created from image
CMD ["node", "src/app.js"]
