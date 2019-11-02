# Base image is Node LTS
# Specifying exact version here to avoid version issues
# Using alpine version to minimize the size of resulting image
FROM node:12.13.0-alpine

ARG NPM_TOKEN

# Service that building
ARG SERVICE

# Service
WORKDIR /app/${SERVICE}
COPY ./${SERVICE}/package*.json ./
COPY ./${SERVICE}/.npmrc ./
RUN npm install --only=production
COPY ./${SERVICE}/src ./src

# Expose port, at which running container will listen for requests
EXPOSE 80

# This command will be used to start application when
# container will be created from image
CMD ["node", "--experimental-modules", "src/app.js"]
