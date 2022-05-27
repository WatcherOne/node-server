const {
    getUserList,
    addUser,
    updateUser,
    deleteUser
} = require('../controllers/userController')

const UserServer = (router) => {
    router.get('/getUserList', getUserList)

    router.get('/getUserList/:id', getUserList)

    router.post('/addUser', addUser)

    router.put('/updateUser', updateUser)

    router.delete('/deleteUser/:id', deleteUser)

    return router
}

module.exports = UserServer
