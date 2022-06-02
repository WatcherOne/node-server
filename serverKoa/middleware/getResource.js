/***********************************************************************
 * author:  zhubo
 * email:   286154864@qq.com
 * created: 2022-06-27
 * fn: 区分不同的路由渲染不同的类型
**********************************************************************/
const fs = require('fs')

const getResource = async (ctx, next) => {
    const { request } = ctx
    if (request.url.startsWith('/api/')) {
        // 处理 /api 接口类的请求
        console.log(`当前请求：${request.method} ${request.url}`)
        await next()
    } else {
        console.log(`当前资源：... ${request.url}`)
        // 处理非 /api 类型的请求时, "都" 返回html文档（因为url实际的地址由前端路由控制，这是单页面应用的处理方式）
        // 而 css、img、js 等都通过 koaStatic 中间件来处理了
        ctx.type = 'html'
        const html = fs.readFileSync(`koaServer/public/index.html`, 'utf-8')
        // const html = fs.readFileSync(`koaServer/example/index.html`, 'utf-8')
        ctx.body = html
    }
}

module.exports = getResource
