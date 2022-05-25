const http = require('http')

const controlSource = require('./handleSource.js')

const hostName = '127.0.0.1'
const port = 3000

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

server.listen(port, hostName, () => {
    console.log('服务器运行中, 127.0.0.1:3000')
})
