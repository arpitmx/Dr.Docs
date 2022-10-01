const express=require('express')
const app=express()
require('./db/mongoose')
const Patient=require('./models/patient')
app.use(express.json());

app.post('/patient',async(req,res)=>{
    const patient=new Patient(req.body)
    try{
        await patient.save()
        res.status(201).send(patient)
    }
    catch(e){
        console.log(e);
    }
})

app.get('/',(req,res)=>{
    res.send("Connected")
})

app.listen(5000,()=>console.log("server connnected"))