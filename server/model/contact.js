const mongoose = require('mongoose')

const contactSchema=new mongoose.Schema({
    name:String,
    email:String,
    phone:Number,
    message:String
})

const contact=mongoose.model('contact',contactSchema)
module.exports=contact