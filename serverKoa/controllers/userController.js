const { handleQuerySql, searchSql, convertHumpFormat } = require('../utils')
const UserColumn = require('../models/userModel')

class UserController {
    async getUserList (ctx) {
        const { id } = ctx.params
        const query = ctx.query
        const sql = id
            ? `select * from user where userid = ${id}`
            : `select * from user ${handleQuerySql(query)}`
        // todo add userDao.getUserList()
        const result = await searchSql(sql)
        result.data = convertHumpFormat(result.data, UserColumn)
        ctx.body = result
    }

    async addUser (ctx) {
        ctx.verifyParams({
            userId: { type: 'string' },
            userName: { type: 'string' }
        })
        // 当校验未通过会直接返回错误信息 - return
        const data = ctx.request.body
        const { userId, userName, password } = data
        const sql = `insert into user (userId,userName,password) values ('${userId}', '${userName}', '${password}')`
        const result = await searchSql(sql)
        result.data = { userId }
        ctx.body = result
    }

    async updateUser (ctx) {
        const data = ctx.request.body
        const { username, userid, password } = data
        const sql = `update user set username='${username}', password='${password}' where userid='${userid}'`
        const result = await searchSql(sql)
        result.data = { userid }
        ctx.body = result
    }

    async deleteUser (ctx) {
        const { id } = ctx.params
        const sql = `delete from user where userid = ${id}`
        ctx.body = await searchSql(sql)
    }
}

module.exports = new UserController()
