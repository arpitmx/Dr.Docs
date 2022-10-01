const mongoose=require('mongoose');
const validator=require('validator')


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
                type: String,
                required:true
            },
            s_start_time:{
                type:Number,
                required:true
            },
            s_end_time:{
                type:Number,
                required:true
            },

            // doc_id:{
            //     type:Number
            // }
            // doc_details:[
            //     {
            //         doc_name:{
            //             type:String,
            //             required:true
            //         }
            //     }
            // ],
            folder:[
                {
                    file_id:{
                        type: Number
                    }
                }
            ]
        }
    ]
})

const User=mongoose.model('patient',ptnschema)
module.exports=User
