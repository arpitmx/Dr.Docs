const mongoose=require('mongoose');
const validator=require('validator')
const {doctschema}=require('./doctor')

const ptnschema=new mongoose.Schema({
    fname:{
        type: String,
        required:true,
        trim:true
    },
    lname:{
        type:String,
        trim:true,
    },
    m_no:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        trim:true,
        lowercase:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Invalid Email")
            }
        }
    },
    sessions:[
        {
            s_name:{
                type: String
            },
            s_start_time:{
                type:Number
            },
            s_end_time:{
                type:Number
            },
            doc_detail : doctschema,
            folder:[
                {
                    downloadable:{
                        type: Boolean
                    },
                    url:{
                        type:String
                    }
                }
            ]
        }
    ]
})

const User=mongoose.model('patient',ptnschema)
module.exports=User
