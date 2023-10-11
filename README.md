# vant_mobile
这是一个基于Vue2.7 + Vant + less + viewPort自适应的移动端项目模版
## Project setup
```
pnpm install
```

### Compiles and hot-reloads for development
```
pnpm run serve
```

### Compiles and minifies for production
```
pnpm run build
```

### Lints and fixes files
```
pnpm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### docker 构建流程


<!-- 执行Dockerfile ,构建镜像 -->
docker build . -t your_image_name --no-cache

<!-- 启动 Docker 容器-->
docker run -d -p 8080:80 your_image_name
