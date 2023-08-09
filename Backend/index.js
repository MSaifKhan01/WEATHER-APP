const express=require('express')

require('dotenv').config()
const cors=require("cors")
const connection=require('./connection/db')
const userrouter = require('./routes/user.router')
const cityrouter = require('./routes/city.router')

const auth = require('./middleware/auth')
const { limiter } = require('./middleware/TimeApi.limiter')
const app=express()
app.use(cors())
app.use(express.json())

app.use("/user",userrouter)


app.use(limiter)



app.use("/city",cityrouter)

app.listen(process.env.port,async ()=>{
    await connection
    console.log("connected")
})