const {listUsersModels} = require('../models/Users')

exports.listUser = (req, res) => {
    return res.send({
        success : true,
        status : 200,
        message : 'list data users'
    })
}