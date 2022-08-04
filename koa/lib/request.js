const url = require('url');

module.exports = {
  get path() {
    // 这里的this指的是ctx.request
    return url.parse(this.req.url).pathname;
  },
  get query() {
    return url.parse(this.req.url).query;
  },
  get headers() {
    return this.req.headers;
  }
}