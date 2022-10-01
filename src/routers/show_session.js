const express = require('express')
const router = express.Router()

const Patient = require('../models/patient')

router.get('/show_session/:patient_id/:session_id', async (req, res) => {
    try {

        const patient_id = req.params.patient_id;
        const session_id = req.params.session_id;
        const patient = await Patient.findById(patient_id);
        console.log(patient);
        const [session] = patient.sessions.filter((session, i) => {
            return session._id.toString() === session_id
        });
        res.json(session);

    }
    catch (e) {
        console.log(e);
    }


})
module.exports = router