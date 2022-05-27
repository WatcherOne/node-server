/***********************************************************************************
 * author:  zhubo
 * email:   286154864@qq.com
 * created: 2022-05-27
 * fn: 用于解析 error 情况的 中间件
************************************************************************************/
const AjaxResult = require('../models/ajaxResult')

module.exports = (app) => {
    app.use(async (ctx, next) => {
        console.log('未匹配到API路由')
        const response = new AjaxResult(null)
        response.status = 404
        response.msg = '无效请求'
        ctx.body = response
        await next()
    })

    // todo 用 error 中间件来更优雅地处理 错误情况！
    app.on('error', err => {
        console.log(`server error: ${err}`)
    })
}
