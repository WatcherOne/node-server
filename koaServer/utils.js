/******************************************************************************
 * author:  zhubo
 * email:   286154864@qq.com
 * created: 2022-05-26
 * fn: 提供一些常见方法的使用
 *****************************************************************************/

exports.handleQuerySql = function (query) {
    let result = ''
    Object.keys(query).forEach(key => {
        result += `${key} like '%${query[key]}%'`
    })
    return result ? `where ${result}` : ''
}
