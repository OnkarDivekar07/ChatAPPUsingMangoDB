require('dotenv').config()
const express = require('express')
const cors = require('cors')
const bodyparser=require('body-parser')
const app = express()
const PORT = process.env.PORT || 5000
const data=require('./data')
console.log(PORT)
//middlewares
app.use(cors())
app.use(express.json())


// app.use((req, res,next) => {
//     res.send("<h1>APP is Running</h1>")
//     next()
// })

app.get('/api/data',(req, res)=> {
    res.send(data)
})




app.listen(PORT);