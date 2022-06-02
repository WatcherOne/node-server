/******************************************************************************
 * author:  zhubo
 * email:   286154864@qq.com
 * created: 2022-05-26
 * fn:  基于 node 创建的 server 服务, 无需安装其它依赖
 *****************************************************************************/

const http = require('http')
const fs = require('fs')  // 文件读取模块, Node自带

const staticDir = './nodeServer/public'

/**
 * 创建一个服务请求
 * 当访问该服务时, 会进入回调函数
 */
const server = http.createServer((req, res) => {
    const url = req.url
    console.log('当前请求地址：', url)
    /* 首先设置响应头 */
    res.setHeader('Content-Type', 'text/plain')

    // 处理不同请求的url（包括一些html、js、css、img资源）
    if (url.includes('.jpg') || url.includes('.png')) {
        fs.readFile(`${staticDir}${url}`, 'utf-8', (_, data) => {
            res.writeHead(200, { 'Content-Type': 'Text/javascript;Chartset=utf-8' })
            res.write(data)
            res.end()
        })
    } else if (url.includes('.js')) {
        fs.readFile(`${staticDir}${url}`, 'utf-8', (_, data) => {
            res.writeHead(200, { 'Content-Type': 'Text/javascript;Chartset=utf-8' })
            res.write(data)
            res.end()
        })
    } else if (url.includes('.css')) {
        fs.readFile(`${staticDir}${url}`, 'utf-8', (_, data) => {
            res.writeHead(200, { 'Content-Type': 'Text/css;Chartset=utf-8' })
            res.write(data)
            res.end()
        })
    } else if (url.startsWith('/api')) {
        // 若以 /api 开始 则进入 后端服务接口请求 // 此demo以 message 返回
        res.end('response your information')
    } else {
        // 对应上面的请求都未通过则 返回 html 页面
        fs.readFile(`${staticDir}/index.html`, 'utf-8', (_, data) => {
            res.writeHead(200, { 'Content-Type': 'Text/Html;Chartset=utf-8' })
            res.write(data)
            res.end()
        })
    }
})

const params = process.argv.slice(2)
const hostName = params[0] || '127.0.0.1'
const port = params[1] || 3000

// 服务运行
server.listen(port, hostName, () => {
    console.log(`服务器运行中： ${hostName}:${port}`)
})
