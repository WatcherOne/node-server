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
    // todo: createPool() 创建连接池
    CONN = mysql.createConnection(mysqlConfig)
    CONN.connect()
    return CONN
}

exports.query = function (sql, params) {
    const conn = connection()
    return new Promise((resolve, reject) => {
        // 执行SQL语句
        /*********
         * sql: 'insert into posts set name=?,title=?,content=?,md=?,uid=?,moment=?,avator=?;'
         * params: [name, newTitle, md.render(content), content, id, time, avator]
         * 可以解决 sql 拼接问题
         * todo: onnection.release()
         *********/
        conn.query(sql, params, (error, results) => {
            if (error) {
                reject(error)
            } else {
                resolve(new AjaxResult(results))
            }
        })
    })
}
