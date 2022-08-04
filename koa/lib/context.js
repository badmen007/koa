
const context = {
  // get path() {
  //   return this.request.path;
  // }
};

// 可以把request上所有的方法都代理一遍  
function defineGetter(target, key) {
  context.__defineGetter__(key, function() {
    return this[target][key]
  })
}
defineGetter('request', 'path')

module.exports = context;