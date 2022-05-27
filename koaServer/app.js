/******************************************************************************
 * author:  zhubo
 * email:   286154864@qq.com
 * created: 2022-05-26
 * fn: 由koa框架 创建一个服务, 需要安装相关依赖, 依赖说明如下
 * koa 更简洁, 去掉了内置中间件, 去掉了路由功能, 由第三方形式提供
 * ************************
 * koa 处理请求是先在启动服务前使用next将中间件级联起来，返回一个调用入口
 * 请求来时，会根据req/res创建context，然后根据入口调用所有中间件
 * 再处理并结束请求，并带上错误处理
 * 由于是由next级联的, 故一定由next, 否则后面的中间件不会执行的！！！
 **************************
*****************************************************************************/
const Koa = require('koa')
const path = require('path')
const koaStatic = require('koa-static')     // 提供静态资源, 减少一个一个路由的写
const parameter = require('koa-parameter')  // 用于参数校验, 底层逻辑还是按照parameter来的

const app = new Koa()
const bodyParsing = require('./middleware/bodyParsing')
const getResource = require('./middleware/getResource')
const erroring = require('./middleware/error')
const routing = require('./router')

/*********************************************************************************************
 *  处理静态资源
 *  - 引用静态资源的地方无需写 static 路径
 *  - 直接 '/' 或 省略 开头
 *********************************************************************************************/
app.use(koaStatic(path.join(__dirname, 'src/static')))
/*****  使用body解析的中间件 ******************************************************************/
bodyParsing(app)
/*****  使用参数校验的中间件 ******************************************************************/
app.use(parameter(app))
/*****  区分路由类型 *************************************************************************/
app.use(getResource)
/*****  使用路由处理的中间件 ******************************************************************/
routing(app)
/*****  错误情况处理 *************************************************************************/
erroring(app)

const params = process.argv.slice(2)
const port = params[0] || 3001

app.listen(port, () => {
    console.log(`服务已运行启动：http://localhost:${port}`)
})
