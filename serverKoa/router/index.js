/***********************************************************************
 * author:  zhubo
 * email:   286154864@qq.com
 * created: 2022-06-27
 * fn: 定义路由接口
**********************************************************************/
const Router = require('koa-router') // 由第三方提供, 需要单独下载
const fs = require('fs')

const router = new Router({
    // 设置路由前缀
    prefix: '/api' 
})

// 通过文件系统来读取所有路由文件
module.exports = app => {
    fs.readdirSync(__dirname).forEach(file => {
        if (file === 'index.js') {
            return
        }
        const route = require(`./${file}`)(router)
        // 调用 router.routes() 来组装匹配好的路由, 返回一个合并好的中间件
        // 调用 router.allowedMethods() 获得一个中间件, 当发送了不符合的请求时, 会返回405 或 501
        app.use(route.routes()).use(route.allowedMethods())
    })
}
