const express = require('express')
const app = express()
require('./db/mongoose')
const Patient = require('./models/patient')
const Doctor = require('./models/doctor')

app.use(express.json());

app.post('/patient', async (req, res) => {
    const patient = new Patient(req.body)
    try {
        await patient.save()
        res.status(201).send(patient)
    }
    catch (e) {
        console.log(e);
    }
})

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

app.get('/', (req, res) => {
    res.send("Connected")
})

app.listen(8000, () => console.log("server connnected"))