#!/bin/sh
yarn

yarn build

docker build -t ginlink/gin-blog:latest .

docker login --username $DOCKER_ACCESS_NAME -p $DOCKER_ACCESS_TOKEN

docker push ginlink/gin-blog:latest
