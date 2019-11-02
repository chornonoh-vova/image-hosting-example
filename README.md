# Image hosting application example
This application was created as an example to my university work.

## Building docker images

Build image for read service

```bash
cd read-service/

docker build \
  --file Dockerfile \
  --tag image-read-service \
  ./
```

Build image for write service

```bash
cd write-service/

docker build \
  --file Dockerfile \
  --tag image-write-service \
  ./
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
