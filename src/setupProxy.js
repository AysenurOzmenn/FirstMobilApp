const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'https://api.yelp.com/v3/businesses',
            changeOrigin: true,
            pathRewrite: {
                '^/api': '',
            },
            headers: {
                Authorization: 'Bearer YOUR_API_KEY',
            },
        })
    );
};
