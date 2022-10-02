const express=require('express')
const router = express.Router()

const Doctors=require('../models/doctor')

router.get('/doctor/qr/:id',async(req,res)=>{
    res.set("Content-Type","image/png");
    res.redirect("https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+req.params.id);
})

router.get('/doctor/:id',async(req,res)=>{
    try{
        const id=req.params.id
        const doctor=await Doctors.findOne({phoneNo:id})
        res.json(doctor);
    }
    catch(e){
        console.log(e);
    }
})
router.post('/doctor', async (req, res) => {
    const doctor = new Doctor(req.body)
    try {
        await doctor.save()
        res.status(201).send(doctor)
    }
    catch (e) {
        console.log(e);
    }
})

module.exports=router