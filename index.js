const express = require('express')
const bodyParser = require('body-parser')
const userRoute = require('./src/routes/Users')

const app = express()
const PORT = 8080

app.use(bodyParser. urlencoded({extended: false}))

app.use('/users', userRoute)

app.listen(PORT, () => {
    console.log(`server listening to port http://localhost:${PORT}`)
})