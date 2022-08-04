const Koa = require('koa');

const app = new Koa();

// koa 并没有路由系统 
app.use((ctx) => {
  ctx.body = 'hello world'
})


app.listen(3000, () => { // http.createServer();
  console.log('server start on 3000');
})