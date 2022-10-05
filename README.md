# docker-with-typescript-node

## Description

Project for learn docker with a node ts aplication. This project was setup with the oficial docker documentation\
Link: https://docs.docker.com/

## Installation

First tou have to install the Docker for Desktop\
Link: https://docs.docker.com/get-docker/

```bash
git clone https://github.com/HermanoCastro65/docker-with-typescript-node.git
cd docker-with-typescript-node
code .
```


## Build the Image 

Execute the comand to build the container image:

```bash
docker build -t <image name>:1.0 .
```

## Run the api with docker

Open your Docker app and get the image id. Run the docker container with comand:

```bash
docker run -p 5000:8080 <image id> 
```
