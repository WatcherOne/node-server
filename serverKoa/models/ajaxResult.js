/**********************************************************************************************
 * 封装返回数据结构
 *********************************************************************************************/

class AjaxResult {
    constructor (data) {
        this.status = 200
        this.data = data
        this.msg = '请求成功'
    }

    setStatus (status) {
        this.status = status
    }

    setData (data) {
        this.data = data
    }

    setMsg (message) {
        this.msg = message
    }
}

module.exports = AjaxResult
