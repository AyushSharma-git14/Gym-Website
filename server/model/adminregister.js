const mongoose = require('mongoose')

const AdminregisterSchema=new mongoose.Schema({
    name:String,
    email:String,
    password:String,
    conpass:String,
    img:String
})

const adminreg=mongoose.model('adminreg',AdminregisterSchema)
module.exports=adminreg