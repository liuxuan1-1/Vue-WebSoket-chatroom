const WebSocket = require('ws');// 导入WebSocket模块:
const WebSocketServer = WebSocket.Server;// 引用Server类:
const { parseUser, createMessage } = require('./getuser');
const Cookies = require('cookies');
const url = require('url');

function createWebSocketServer(server, onConnection, onMessage, onClose, onError) {
  let wss = new WebSocketServer({
    server: server
  });
  wss.broadcast = function broadcast(data) { // 自定义广播方法
    wss.clients.forEach(function each(client) {
      client.send(data);
    });
  };
  onConnection = onConnection || function () {
    console.log('[WebSocket] connected.');
  };
  onMessage = onMessage || function (msg) {
    console.log('[WebSocket] message received: ' + msg);
  };
  onClose = onClose || function (code, message) {
    console.log(`[WebSocket] closed: ${code} - ${message}`);
  };
  onError = onError || function (err) {
    console.log('[WebSocket] error: ' + err);
  };
  wss.on('connection', function (ws, req) {
    ws.upgradeReq = req;
    let location = url.parse(ws.upgradeReq.url, true);
    console.log('[WebSocketServer] connection: ' + location.href);
    ws.on('message', onMessage);
    ws.on('close', onClose);
    ws.on('error', onError);
    if (location.pathname !== '/ws/chat') {
      // close ws:
      ws.close(4000, 'Invalid URL');
    }
    // check user:
    let user = parseUser(ws.upgradeReq); // 判断cookie中是否含有用户字段
    if (!user) {
      ws.close(4001, 'Invalid user');
    }
    ws.user = user;
    ws.wss = wss;
    onConnection.apply(ws);
  });
  console.log('WebSocketServer was attached.');
  return wss;
}

function onConnect() {
  let user = this.user;
  if (!user) {
    console.log(user, 'user not found in session.')
    return;
  }

  let msg = createMessage('join', user, `${user.name} joined.`);
  this.wss.broadcast(msg);
  // build user list:
  let users = this.wss.clients.forEach(function (client) {
    return client.user;
  })
  this.send(createMessage('list', user, users));
}

function onMessage(message) {
  console.log(message);
  if (message && message.trim()) {
    let msg = createMessage('chat', this.user, message.trim());
    this.wss.broadcast(msg);
  }
}

function onClose() {
  let user = this.user;
  if (!user) {
    console.log(user, 'user not found in session.')
    return;
  }
  let msg = createMessage('left', user, `${user.name} is left.`);
  this.wss.broadcast(msg);
}

module.exports = function (server) {
  return createWebSocketServer(server, onConnect, onMessage, onClose);
}