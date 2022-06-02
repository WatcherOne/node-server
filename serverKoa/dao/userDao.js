const DB = require('./db')

module.exports = {
    getUserList: async () => {
        const sql = 'select * from user'
        return await DB.query(sql)
    }
}
