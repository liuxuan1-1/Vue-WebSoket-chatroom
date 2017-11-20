const Koa = require('koa');
const router = require('koa-router')();//函数
const bodyParser = require('koa-bodyparser');
const fs = require('fs');
const https = require('https');
const staticFiles = require('./static-files');
const ws = require('./websocket');
const { parseUser, createMessage } = require('./getuser');


const app = new Koa();
app.use(bodyParser());
app.use(staticFiles('/static/', __dirname + '/static'));

// log request url
app.use(async(ctx, next) => {
  console.log(`Process ${ctx.request.method} ${ctx.request.url}`);
  await next();
})

app.use(async (ctx, next) => {
  ctx.state.user = parseUser(ctx.cookies.get('name') || '');
  await next();
});

const controller = require('./controller');
app.use(controller());

let port = 3000;
// koa app的listen()方法返回http.Server:
let server = app.listen(port);
console.log(`at ${port}`);



/**
 * webSocket配置项
 */
// 创建WebSocketServer:
app.wss = ws(server);
