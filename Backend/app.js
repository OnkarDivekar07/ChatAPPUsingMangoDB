require('dotenv').config()
const express = require('express')
const cors = require('cors')
const bodyparser=require('body-parser')
const app = express()
const PORT = process.env.PORT || 5000
const data = require('./data')
const connectionDB = require('./util/db')

connectionDB()
console.log(PORT)

//middlewares
app.use(cors())
app.use(express.json())



app.get('/api/data',(req, res)=> {
    res.send(data)
})




app.listen(PORT);