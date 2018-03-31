# chatroom-server

## Build Setup

``` bash
# install dependencies
npm install

# 开启WebSocket服务器
npm start

```

## 目录结构


│  app.js                 启动文件
│  controller.js          注册路由
│  getuser.js             取出cookie中的用户
│  package-lock.json
│  package.json
│  README.md
│  static-files.js        静态文件处理
│  websocket.js           WebSocket配置处理文件
│  
├─controllers             路由配置文件
│      index.js
│      signin.js
│      
└─static                  web文件夹下的vue打包而成