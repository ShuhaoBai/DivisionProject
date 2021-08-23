const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function (app) {
  app.use(
    '/postcontent',
    createProxyMiddleware({
      target: 'http://localhost:8000',
      pathRewrite: { '^/postcontent': '' },
      changeOrigin: true,
    })
  );
  app.use(
    '/infostats',
    createProxyMiddleware({
      target:
        'https://informationrelease.pnl.gov/API/InfoRelease/releaseDirectorateStats',
      pathRewrite: { '^/infostats': '' },
      changeOrigin: true,
      withCredentials: true,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      onProxyReq: function (proxyReq, req, res) {
        const username = 'bais039';
        const password = 'zaq11WSX';
        const ntlmToken = Buffer.from(
          `${username}:${password}`,
          'utf8'
        ).toString('base64');
        proxyReq.setHeader('WWW-Authenticate', `Negotiate ${ntlmToken}`);
      },
      logLevel: 'debug',
    })
  );
};
