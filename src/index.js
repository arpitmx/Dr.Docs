const express = require('express')
const app = express()
require('./db/mongoose')
// const Patient = require('./models/patient')
const doctorRouter = require('./routers/doctor');
const patientRouter = require('./routers/patient')
app.use(express.json());
const session_router = require('./routers/show_session')
const create_session_router=require('./routers/create_session')



// app.get('/show_session/:patient_id/:session_id'){

// }
app.use(patientRouter);
app.use(doctorRouter);
app.use(session_router);
app.use(create_session_router);


app.get('/', (req, res) => {
    res.send("Connected")
})

app.listen(8000, () => console.log("server connnected"))