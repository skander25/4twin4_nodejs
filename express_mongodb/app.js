const express=require('express')
const app=express()

const logger=require("morgan")
const createError=require("http-errors")
var mongoose=require('mongoose')
var configDb=require('./database/mongodb.json')
const contactRouter=require('./routes/contacts')
app.subscribe(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use('/contacts',contactRouter)
app.use((req,res,next)=>{
    next(createError(404))

})
mongoose.connect(configDb.mongo.uri)
module.exports=app


