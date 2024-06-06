const express = require('express')
var bodyParser = require('body-parser')
var cors = require('cors')
const app = express()
const port = 5000
var bcrypt = require('bcrypt')
var saltRounds = 10
var multer = require('multer')
var jwt = require('jsonwebtoken');


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse application/json
app.use(bodyParser.json())


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads')
    },
    filename: function (req, file, cb) {

        cb(null, file.originalname)
    }
})

const upload = multer({ storage })


app.use(cors())
//db connect
require('./connection/connection')
//model connect
const contact = require('./model/contact')
const adminregister = require('./model/adminregister')

app.post('/contact', async (req, res) => {
    const { name, email, mobile, message } = req.body
    if (name && email != null) {
        let contactdata = new contact({ name, email, mobile, message })
        let result = await contactdata.save()
        res.send({ Message: "Message sent successfully!!!", result })
    }
    else {
        res.send({ Message: "Please fill details" })
    }
})


app.post('/admin-register', upload.single('img'), async (req, res) => {
    const { name, email, password, conpass, img } = req.body
    const preAdmin = await adminregister.findOne({ email })
    if (!preAdmin) {
        let hashpassword = await bcrypt.hash(password, saltRounds)
        let hashconpass = await bcrypt.hash(conpass, saltRounds)
        const photo = typeof req.file != "undefined" ? req.file.filename : null
        let admindata = await new adminregister({ name, email, password: hashpassword, conpass: hashconpass, img: photo })
        let result = await admindata.save()
        res.send({ message: "Admin registered", userdata: result })
    }
    else {
        res.send({ message: "User already registered" })
    }
})

app.post('/admin-login', async (req, res) => {
    const { email, password } = req.body
    if (email && password) {
        const findEmail = await adminregister.findOne({ email })
        if (findEmail != null) {
            const ismatchpass = bcrypt.compare(password, findEmail.password)
            if (email && ismatchpass) {
                var token=jwt.sign({findEmail},"dhsfugrfuyegf",{expiresIn:"1h"})
                res.send({ message: "login success" ,user:findEmail,token})
            }
            else {
                res.send({ message: "invalid" })
            }
        }
        else {
            res.send({ message: "not admin" })
        }
    }
    else {
        res.send({ message: "fill all details" })
    }
})


app.get('/fetch',async(req,res)=>{
    let result=await adminregister.find()
    res.send(result)
})
app.get('/getdetails/:id',async(req,res)=>{
    let result=await adminregister.findById({_id:req.params.id})
    res.send(result)
})

app.put('/update/:id',async(req,res)=>{
    const { name, email, password, conpass, img }=req.body
    let result=await adminregister.updateOne(
        {_id:req.params.id},
        {$set:{ name, email, password, conpass, img}},
        res.send(result)
    )
    })

app.delete('/delete:id',async(req,res)=>{
    await gymreg.deleteOne({_id:req.params.id})
    res.send({message:"deleted"})
})




app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})