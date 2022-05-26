/******************************************************************************
 * author:  zhubo
 * email:   286154864@qq.com
 * created: 2022-05-26
 * fn: 由koa框架 创建一个服务, 需要安装相关依赖, 依赖说明如下
 * koa 更简洁, 去掉了内置中间件, 去掉了路由功能, 由第三方形式提供
 *****************************************************************************/

// koa 处理请求是先在启动服务前使用next将中间件级联起来，返回一个调用入口
// 请求来时，会根据req/res创建context，然后根据入口调用所有中间件
// 再处理并结束请求，并带上错误处理
// 由于是由next级联的, 故一定由next, 否则后面的中间件不会执行的！！！
const Koa = require('koa')
const compose = require('koa-compose')       // 组合中间件, 由koa内置自带
// bodyParser 中间件不支持 form-data 数据
const bodyParser = require('koa-bodyparser') // 用于解析 body 请求的数据
const koaBody = require('koa-body')

const app = new Koa()
const router = require('./router')
const ResponseObj = require('./responseObj')

app.use(bodyParser())
// 允许上传多个文件
// app.use(koaBody({ multipart: true }))

// 进入路由前的中间件
app.use(async (ctx, next) => {
    const { request } = ctx
    console.log(`当前请求：${request.method} ${request.url}`)
    await next()
})

app.use(router.routes())  // 调用 router.routes() 来组装匹配好的路由, 返回一个合并好的中间件
app.use(router.allowedMethods()) // 调用 router.allowedMethods() 获得一个中间件, 当发送了不符合的请求时, 会返回405 或 501

// 当以上路由未匹配到时, 进入该中间件
app.use(async (ctx, next) => {
    const response = new ResponseObj(null)
    response.setStatus(404)
    response.setMsg('无效请求')
    ctx.response.body = response
    await next()
})

app.on('error', err => {
    console.log(`server error: ${err}`)
})

const params = process.argv.slice(2)
const port = params[0] || 3001

app.listen(port, () => {
    console.log(`服务已运行启动：http://localhost:${port}`)
})
