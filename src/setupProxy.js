const proxy = require('http-proxy-middleware')

module.exports = function(app) {
    app.use(
        proxy('/api1', {//遇见/api1就触发代理
            target: 'http://localhost:5000', //请求转发给谁
            changeOrign: true,
            pathRewrite: {'^/api1':''}
        })
    )
}