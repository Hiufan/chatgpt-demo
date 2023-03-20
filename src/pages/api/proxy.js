const httpProxy = require('http-proxy');
const { send } = require('micro');

const proxy = httpProxy.createProxyServer();

module.exports = (req, res) => {
  // 设置代理目标URL
  const targetUrl = 'http://example.com';
  
  // 代理请求到目标URL
  proxy.web(req, res, { target: targetUrl }, (err) => {
    send(res, 500, err.message);
  });
};
