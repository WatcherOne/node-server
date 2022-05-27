/***********************************************************************************
 * author:  zhubo
 * email:   286154864@qq.com
 * created: 2022-05-27
 * fn: 用于解析 post 请求的 body 数据
************************************************************************************/
const bodyParser = require('koa-bodyparser') // 不支持 form-data 数据
const koaBody = require('koa-body')          // 针对楼上的中间件的优化方案

const bodyParsing = (app) => {
    app.use(bodyParser())
    // app.use(koaBody({
    //     multipart: true, // 允许上传多个文件
    //     encoding: 'gzip',
    //     formidable: {
    //         uploadDir: path.join(__dirname,'public/uploads'), // 设置文件上传目录
    //         keepExtensions: true,           // 保持文件的后缀
    //         maxFieldsSize: 2 * 1024 * 1024, // 文件上传大小
    //         onFileBegin: (name, file) => {  // 文件上传前的设置
    //             // console.log(`name: ${name}`)
    //             // console.log(file)
    //         }
    //     }
    // }))
}

module.exports = bodyParsing
