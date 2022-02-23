#!/bin/sh
eval $(ssh-agent -s)

#将ssh private key 放入当前服务器，这样才可以登录远端服务器
echo "$PRIVATE_KEY" > deploy.key

mkdir -p ~/.ssh
chmod 0600 deploy.key
ssh-add deploy.key

echo "Host *\n\tStrictHostKeyChecking no\n\n" >> ~/.ssh/config

#复制一些东西
scp sh/deploy_web_docker_pull.sh $HOST_ADMIN_99@$HOST_IP_99:~/ginblog/
scp docker-compose.yml $HOST_ADMIN_99@$HOST_IP_99:~/ginblog/

#登录远端服务器并执行命令
ssh $HOST_ADMIN_99@$HOST_IP_99 "cd ginblog && sh deploy_web_docker_pull.sh"
