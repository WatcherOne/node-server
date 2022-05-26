/******************************************************************************
 * author:  zhubo
 * email:   286154864@qq.com
 * created: 2022-05-26
 * fn: 基于 node 创建的 server 服务, 无需安装其它依赖
 *****************************************************************************/

const http = require('http')

const controlSource = require('./handleSource.js')

const params = process.argv.slice(2)
const hostName = params[0] || '127.0.0.1'
const port = params[1] || 3000

// 创建一个服务请求
const server = http.createServer((request, response) => {
    // 当访问该服务器时, 会进入该回调！
    response.setHeader('Content-Type', 'text/plain') // 设置响应头
    console.log('当前请求地址：', request.url)

    // 请求不同的资源时, 也会进入(如css、js文件)
    // 处理Url区分请求类型
    const fileType = request.url.split('.')
    
    if (fileType[1]) {
        if (fileType[1] === 'jpg' || fileType === 'png') {
            controlSource.sendImg(fileType[0], response)
        } else {
            controlSource.sendFile(fileType[0], response, fileType[1])
        }
    } else {
        // 结束响应信息
        response.end('response your information')
    }
})

// 服务运行
server.listen(port, hostName, () => {
    console.log(`服务器运行中： ${hostName}:${port}`)
})
