/******************************************************************************
 * author:  zhubo
 * email:   286154864@qq.com
 * created: 2022-05-26
 * fn: 提供一些常见方法的使用
*****************************************************************************/
const DB = require('./db')

const handleQuerySql = function (query) {
    let result = ''
    Object.keys(query).forEach(key => {
        result += `${key} like '%${query[key]}%'`
    })
    return result ? `where ${result}` : ''
}

const searchSql = async function (sql) {
    console.log(`**************************************************************`)
    console.log(`查询语句: ${sql}`)
    console.log(`**************************************************************`)
    return DB.query(sql)
}

const convertHumpFormat = function (list, columns) {
    if (list) {
        if (Array.isArray(list)) {
            list = list.map(item => {
                if (typeof item === 'object') {
                    return convertHumpFormat(item, columns)
                } else {
                    return item
                }
            })
        } else if (typeof list === 'object') {
            let obj = {}
            Object.keys(columns).forEach(col => {
                const key = col.toLowerCase()
                obj[col] = list[key]
            })
            return obj
        }
    }
    return list
}

module.exports = {
    handleQuerySql,
    searchSql,
    convertHumpFormat
}
