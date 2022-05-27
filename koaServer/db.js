const mysql = require('mysql') // 由第三方提供, 需要单独下载
const AjaxResult = require('./models/ajaxResult')

const mysqlConfig = {
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'poem'
}

let CONN = null

function connection () {
    if (CONN) return CONN
    CONN = mysql.createConnection(mysqlConfig)
    CONN.connect()
    return CONN
}

exports.query = function (sql, params) {
    const conn = connection()
    return new Promise((resolve, reject) => {
        // 执行SQL语句
        conn.query(sql, params, (error, results) => {
            if (error) {
                reject(error)
            } else {
                resolve(new AjaxResult(results))
            }
        })
    })
}
