const route = require('express').Router()
const {listUser} = require('../controller/Users')

route.get('/', listUser)

module.exports = route