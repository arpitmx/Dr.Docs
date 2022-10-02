const mongoose=require('mongoose');
const validator=require('validator')

const doctschema=new mongoose.Schema({
    doc_details:{
        doc_id:{
        type : String,
        trim :true
    },
    doc_name:{
        type:String,
        trim:true
    },
    clinic_name:{
        type:String,
        trim:true
    },
    phoneNo :{
        type:Number
    },
    specialization:[{
        degree:{
            type:String,
            trim:true
        }
    }],
    session:[{
        patient_id:{
            type:String,
            trim:true
        },
        session_id:{
            type:String,
            trim:true
        }

    }]
    }
})

const Doctor=mongoose.model('doctor',doctschema)
module.exports={ Doctor, doctschema}