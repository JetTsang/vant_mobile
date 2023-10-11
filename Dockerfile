# 基础镜像
FROM nginx:latest

# 删除默认配置
RUN rm /etc/nginx/conf.d/default.conf

# 将构建出来的 dist 文件夹复制到容器内的 /usr/share/nginx/html/ 目录下 
COPY dist/. /usr/share/nginx/html/

# 复制新的配置文件到容器内
COPY default.conf /etc/nginx/conf.d/