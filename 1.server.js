const Koa = require('./koa');

const app = new Koa();

// koa 并没有路由系统 
app.use((ctx) => {

  // 自己封装了request 和 response
  // ctx 封装了很多的方法 调用起来更加的方便

  // console.log(ctx.req.url);
  // console.log(ctx.req.method);
  // console.log(ctx.request.path)
  console.log(ctx.path)

  ctx.res.end('hello')
})


app.listen(3000, () => { // http.createServer();
  console.log('server start on 3000');
})