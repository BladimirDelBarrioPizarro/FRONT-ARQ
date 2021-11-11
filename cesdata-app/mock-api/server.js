const express = require('express')
const apiMocker = require('connect-api-mocker')
// const fileUpload = require('express-fileupload')
const cors = require('cors')
const bodyParser = require('body-parser')

const port = 9000
const app = express()
/* app.use(fileUpload({
    createParentPath: true
})) */

const corsOptions = {
    origin: 'http://localhost:8080',
    credentials: true
}

app.use(cors(corsOptions))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/api', apiMocker('mock-api'))
app.listen(port)

console.log(`Mock API Server is up and running at: http://localhost:${port}`)
