/******************************************************************************
 * author:  zhubo
 * email:   286154864@qq.com
 * created: 2022-05-27
 * fn: 验证用户是否登录的中间件
 * whiteList: 白名单
*****************************************************************************/
const AjaxResult = require('../models/ajaxResult')

const whiteList = ['/api/login']

const authorize = async (ctx, next) => {
    const url = ctx.request.url
    const token = ctx.cookies.get('Admin-Token')
    if (token || whiteList.includes(url)) {
        await next()
    } else {
        const response = new AjaxResult(null)
        response.status = 405
        response.msg = '登录已过期, 请重新登录'
        ctx.body = response
    }
}

module.exports = authorize
