const express = require('express')
const bodyParser = require('body-parser')
const userRoute = require('./src/routes/Users')

const app = express()

app.use(bodyParser. urlencoded({extended: false}))

app.use('/users', userRoute)