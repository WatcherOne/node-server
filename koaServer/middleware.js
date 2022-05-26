/*********************************************************************
 * author:  zhubo
 * email:   286154864@qq.com
 * created: 2022-05-26
 * fn: 中间件的统一处理
 *********************************************************************/

async function logger (ctx, next) {
    await next()
    const finishTime = ctx.response.get('X-Response-Time')
    console.log(`当前请求总消耗实际: ${finishTime}`)
}

async function responseTime (ctx, next) {
    const startTime = Date.now()
    await next()
    const ms = Date.now() - startTime
    ctx.set('X-Response-Time', `${ms}ms`)
    console.log('设置X-Response-Time')
}

const middleware = [logger, responseTime]

module.exports = middleware
