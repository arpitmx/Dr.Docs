const express=require('express')
const router = new express.Router()
const Patient=require('../models/patient')

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

router.get('/patient/:m_no',async(req,res)=>{
    try{
        const patient=await Patient.findOne({
            m_no:req.params.m_no
        })
        res.json(patient)
    }catch(e){
        console.log(e); }
})

module.exports=router

/*

Giving data of a doctor
Display data

*/ 