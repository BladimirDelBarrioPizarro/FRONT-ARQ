const express = require('express')
const apiMocker = require('connect-api-mocker')
const bodyParser = require('body-parser')


const port = 9000
const app = express()

const corsOptions = {
  origin: 'http://localhost:8080',
  credentials: true
}

const cors = require('cors')


app.use(cors(corsOptions))
app.use(bodyParser.urlencoded({ extended:false }))
app.use(bodyParser.json())
app.use('/api', apiMocker('mock-api'))



app.listen(port,() => {
    console.log(`Mock API Server is up and running at: http://localhost:${port}`);
  })


