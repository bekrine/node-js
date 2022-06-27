
const express=require('express')
const data=require('../data')
const router=express.Router()



router.get('/getData',(req,res)=>{
    res.send(data)
})


router.get('/addData',(req,res)=>{
    res.render('addUser')
})

router.post('/',(req,res)=>{
    const isValide=true
    if(isValide){
        data.push({id:4,name:req.body.name})
        res.redirect('/user/getData')
    }else{
        console.log('error')
        res.render('/user/addData',{name:req.body.name})
    }
    
})

module.exports=router