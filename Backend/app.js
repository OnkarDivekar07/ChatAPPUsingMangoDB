require('dotenv').config()
const express = require('express')
const cors = require('cors')
const bodyparser=require('body-parser')
const PORT = process.env.PORT || 5000
const connectionDB = require('./util/db')

const app = express()
connectionDB()

//routes
const userroutes=require('./routes/userroutes')

//middlewares
app.use(cors())
app.use(express.json())

//routes
app.use('/user',userroutes)



app.listen(PORT);