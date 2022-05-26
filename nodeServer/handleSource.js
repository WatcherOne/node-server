// 此处使用ES6特性 Modules模块化
// !! 需要在package.json 中配置 type: "module"
// 用了 module 模式 就不能用 commonJS 模式

const fs = require('fs')  // 文件读取模块, Node自带

const FILETYPE = {
    html: 'Text/Html;Chartset=utf-8',
    css: 'Text/css;Chartset=utf-8',
    js: 'Text/javascript;Chartset=utf-8'
}

module.exports = {
    sendFile: (url, response, type) => {
        // params:  '文件路径', '文件解析方式', '回调函数(报错信息, 正确返回的数据)'
        fs.readFile(`./src/${url}.${type}`, 'utf-8', (_, data) => {
            response.writeHead(200, { 'Content-Type': FILETYPE[type] })
            response.write(data)
            response.end()
        })
    },
    sendImg: (url, response) => {
        fs.readFile(`./src/${url}`, 'utf-8', (_, data) => {
            response.writeHead(200, { 'Content-Type': 'Text/javascript;Chartset=utf-8' })
            response.write(data)
            response.end()
        })
    }
}
