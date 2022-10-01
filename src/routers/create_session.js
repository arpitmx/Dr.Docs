const { application } = require('express')
const express = require('express')
const router = express.Router()
application.use(express.json());

const patients = require('../models/patient')
router.post('/createSession/:id', async (req, res) => {
    try {
        const id = req.params.id;
        await patients.updateOne({ _id: id }, { $push: { sessions: req.body } });
        res.send("ok");
    }
    catch (e) {
        console.log(e);
    }

})

module.exports = router