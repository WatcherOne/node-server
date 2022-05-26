const Router = require('koa-router') // 由第三方提供, 需要单独下载
const DB = require('./database')
const { handleQuerySql } = require('./utils')

const router = new Router({
    prefix: '/api'  // 设置路由前缀
})

async function searchSql (sql) {
    console.log(`查询语句: ${sql}`)
    return DB.query(sql)
}

// 设置用户权限问题
// router.use(authorize())

router.get('/getUserList', async (ctx) => {
    const query = ctx.query
    const sql = `select * from user ${handleQuerySql(query)}`
    ctx.response.body = await searchSql(sql)
})

router.get('/getUserList/:id', async (ctx) => {
    const { id } = ctx.params
    const sql = `select * from user where userid = ${id}`
    ctx.response.body = await searchSql(sql)
})

router.post('/addUser', async (ctx) => {
    const data = ctx.request.body
    const { username, userid, password } = data
    const sql = `insert into user (username,userid,password) values ('${username}', '${userid}', '${password}')`
    const result = await searchSql(sql)
    result.data = { userid }
    ctx.response.body = result
})

router.put('/updateUser', async (ctx) => {
    const data = ctx.request.body
    const { username, userid, password } = data
    const sql = `update user set username='${username}', password='${password}' where userid='${userid}'`
    const result = await searchSql(sql)
    result.data = { userid }
    ctx.response.body = result
})

router.delete('/deleteUser/:id', async (ctx) => {
    const { id } = ctx.params
    const sql = `delete from user where userid = ${id}`
    ctx.response.body = await searchSql(sql)
})

module.exports = router
