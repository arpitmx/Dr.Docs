const express=require('express')
const router = new express.Router()

const Patient=require('../models/patients')

router.post('/patient',async(req,res)=>{
    const patient=new Patient(req.body)
    try{
        await patient.save()
        res.status(201).send(patient)
    }
    catch(e){
        console.log(e);
    }
})



module.exports=router

/*

Giving data of a doctor
Display data
SignUp
LogIn
Fetch File

*/ 