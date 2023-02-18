const mongoose=require('mongoose')
const Schema=mongoose.Schema
const Contact=new Schema(
    {
        fullName:String,
        phone:Number
    }
)
module.exports=mongoose.model('Contacts',Contact)
