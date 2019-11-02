# Image hosting application example
This application was created as an example to my university work.

## Building docker images

### (Optionally) pull images, required in stack

You can pull images, used in this example, before building and starting application.

```bash
# Node LTS
# used for services
docker pull node:12.13.0-alpine
# MongoDB
# used as storage for additional image data
docker pull mongo:3.4.23

```

### Build image for read service

Command needs to be executed from the root of repository.

```bash
docker build \
  --file Dockerfile \
  --build-arg NPM_TOKEN=${NPM_TOKEN} \
  --build-arg SERVICE='read-service' \
  --tag image-read-service .
```

### Build image for write service

Command needs to be executed from the root of repository.

```bash
docker build \
  --file Dockerfile \
  --build-arg NPM_TOKEN=${NPM_TOKEN} \
  --build-arg SERVICE='write-service' \
  --tag image-write-service .
```

## Starting application

Start the stack

```bash
# only initialize swarm if it was not initialized before
docker swarm init

docker stack deploy \
  --compose-file docker-compose.yml \
  image_hosting
```

## Stopping application

```bash
docker stack rm image_hosting
```
