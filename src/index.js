const express=require('express')
const app=express()
require('./db/mongoose')
const Patient=require('./models/patient')
const doctorRouter = require('./routers/doctor');
app.use(express.json());


<<<<<<< HEAD
app.post('/doctor', async (req, res) => {
    // console.log("doc hit");
    const doctor = new Doctor(req.body)
    try {
        await doctor.save()
        res.status(201).send(doctor)
    }
    catch (e) {
        console.log(e);
    }
})
app.get('/show_session/:patient_id/:session_id'){
    
}
=======
app.use(doctorRouter);
// app.post('/patient',async(req,res)=>{
//     const patient=new Patient(req.body)
//     try{
//         await patient.save()
//         res.status(201).send(patient)
//     }
//     catch(e){
//         console.log(e);
//     }
// })
>>>>>>> eee8e34baa226375d6c9c5782a56b61bbe7a9171

app.get('/',(req,res)=>{
    res.send("Connected")
})

app.listen(5000,()=>console.log("server connnected"))