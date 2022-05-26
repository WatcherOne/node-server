// 校验用户list是否正确
module.exports = function checkUser (obj) {
    if (!obj.username) {
        return 'username is Empty'
    }
    return ''
}
