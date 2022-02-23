
#删除原有镜像
docker rmi -f ginlink/gin-blog:latest

#拉取服务器容器并启动
docker-compose  -f  docker-compose.yml pull
docker-compose -f docker-compose.yml down
docker-compose -f docker-compose.yml up -d
