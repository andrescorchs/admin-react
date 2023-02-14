# CONTRIBUTING

## How to build the Dockerfile image locally

```
docker build -t IMAGE_NAME DOCKERFILE_DIR
```

## How to run the Dockerfile locally

```
docker run -dp 5000:3000 -w /app -v "$(pwd):/app" IMAGE_NAME 
```
the volume flag (-v) helps to see the changes made in your local files into the docker server