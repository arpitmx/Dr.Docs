const mongoose=require('mongoose');
const validator=require('validator')

const doctschema=new mongoose.Schema({
    doc_id:{
        type : String,
        required: true,
        trim :true
    },
    doc_name:{
        type:String,
        required:true,
        trim:true
    },
    clinic_name:{
        type:String,
        required:true,
        trim:true
    },
    specialization:[{
        degree:{
            type:String,
            required:true,
            trim:true
        }
    }]
})

const Doctor=mongoose.model('doctor',doctschema)
module.exports=Doctor