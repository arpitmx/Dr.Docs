const express=require('express')
const app=express()
require('./db/mongoose')
const Patient=require('./models/patients')
app.use(express.json());



app.get('/',(req,res)=>{
    res.send("Connected")
})

app.listen(5000,()=>console.log("server connnected"))