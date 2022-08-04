const http = require('http');

const request = require('./request');
const context = require('./context');
const response = require('./response');

class Application {

  constructor() {
    // 每次创建应用的时候 拿到的都是独立的 而不是同一个对象
    this.context = Object.create(context);
    this.request = Object.create(request);
    this.response = Object.create(response);
  }

  use(fn) {
    this.middleware = fn;
  }

  createContext(req, res) {
    const ctx = Object.create(this.context);
    const request = Object.create(this.request);
    const response = Object.create(this.response);

    ctx.req = req; //原生的
    ctx.res = res;
    ctx.request = request; //扩展的
    ctx.request.req = req; // 可以在request中访问原生的req
    ctx.response = response;


    return ctx;
  }

  // 箭头函数为了保证this的指向
  handleRequest = (req, res) => {
    // 每次的请求都是独立的 不会出现第一次请求的属性 会被第二次用到的情况
    
    const ctx = this.createContext(req, res);

    this.middleware(ctx, req, res);
  }

  listen(...args) {
    const server = http.createServer(this.handleRequest);
    server.listen(...args)
  }
}

module.exports = Application;