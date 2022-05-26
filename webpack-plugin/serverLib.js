/********************************************************************
 * author: zhubo
 * email: 286154864@qq.com
 * created: 2022-05-26
 * fn: 用 node.js 封装一个能操作远程服务器的工具
 *******************************************************************/

// node 提供的实用工具
const util = require('util')
// node 提供的事件触发器
const events = require('events')
// node 提供的用于处理文件和目录路径的工具
const path = require('path')
// node 提供的文件系统
const fs = require('fs')
// 单独 npm 下载
const { Client } = require('ssh2')

// 执行命令所有参数 (node XXX.js -2)
// return []
const params = process.argv.slice(2)
const host = params[0] || '127.0.0.1'
const port = params[1] || 8030
console.log(params)

/**
 * 连接远程电脑
 *   ---- 远程电脑必须要有 OpenSSH ！(一般自带功能,只需要开启即可)
 * @parmas server    远程电脑凭证
 * @parmas callback  回调函数
 * @callback conn    连接远程的 client 对象
 */
function Connect (server, callback) {
    const conn = new Client()
    conn.on('ready', () => {
        callback(conn)
    }).on('error', err => {
        console.log(`connect error: ${err}`)
    }).on('end', () => {
        console.log(`connect end!`)
    }).on('close', err => {
        console.log(`connect close: ${err}`)
    }).connect(server)
}

/**
 * Shell 命令
 * @params server   远程电脑凭证
 * @params cmd      执行的命令
 * @params callback 回调函数
 */
function Shell (server, cmd, callback) {
    Connect(server, conn => {
        conn.shell((err, stream) => {
            if (err) {
                callback(err)
            } else {
                let buf = '';
                stream.on('close', () => {
                    conn.end()
                    callback(err, buf)
                }).on('data', data => {
                    buf += data
                }).stderr.on('data', data => {
                    console.log(`stderr: ${data}`)
                })
                // 通过 ssh2 实例的 shell 解析并执行 cmd 命令
                stream.end(cmd)
            }
        })
    })
}

/**
 * 上传文件
 * @params server     远程电脑凭证
 * @params localPath  本地路径
 * @params remotePath 远程路径
 * @params callback   回调函数
 */
function UploadFile (server, localPath, remotePath, callback) {
    Connect(server, conn => {
        conn.sftp((err, sftp) => {
            if (err) {
                then(err)
            } else {
                sftp.fastPut(localPath, remotePath, (err, result) => {
                    conn.end()
                    callback(err, result)
                })
            }
        })
    })
}

UploadFile({
    host,
    // port,
    username: 'sinways',
    password: '123456',
    debug: console.log,
    readyTimeout: 6000,
    // 如果用户验证失败, 请尝试键盘交互用户身份验证
    tryKeyboard: true
}, './dist/favicon.icon', '/project/webpack-demo/node_server/src ', (err) => {
    if (err) throw err
    console.log(`\n自动化上传文件成功`)
})
// exports.UploadFile = UploadFile

// 最终失败了 连接不上呢！
