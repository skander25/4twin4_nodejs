const express=require('express')
const router=express.Router()
var Contact=require('../models/contact.js')

router.get('/',(req,res,next)=>{
    Contact.find((err,contacts)=>{
        if(err){
            console.log('error:',err)
        }
        else{
            res.json({title:"les contactes",cont:contacts})
        }
    })
// res.json({message:'hello'})

})
router.delete('/:id', (req, res) => {
     Contact.findByIdAndRemove(req.params.id).then((data) =>
      { res.json({ message: 'Contact Deleted Successfully' } ) }).catch((err) => { res.json({ message: 'Contact Not Deleted' }) }) });
      router.put('/:id', (req, res) => {
         contact.findByIdAndUpdate(req.params.id, req.body).then((data) => 
         { res.json({ message: 'Contact Updated Successfully' }) }).catch((err) => { res.json({ message: 'Contact Not Updated' }) })})
 router.get('/:id',(req,res)=>{
    Contact.findById(req.params.id,(err,contact)=>{
        if(err)
        console.log("error",err)
        else{
            res.json(contact)
        }
    })
 })
router.post('/',(req,res,next)=>{
    var contact=new Contact({fullName:req.body.ContactName,phone:req.body.ContactNumber})
    contact.save((err,newContact)=>{
        if(err)
        console.log(err);
        else{
            res.json(newContact)
        }
    })
})
module.exports=router