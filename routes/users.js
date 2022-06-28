
const express=require('express')
const uuid=require('uuid')
let data=require('../data')
const router=express.Router()



router.get('/getData',(req,res)=>{
    res.send(data)
})


router.get('/addData',(req,res)=>{
    res.render('addUser')
})


router.get('/update',(req,res)=>{
    res.render('updateUser',{data:data})
})

router.get('/delete',(req,res)=>{
    res.render('deleteUser',{data:data})
})
//adduser
router.post('/',(req,res)=>{
    const isValide=true
    if(isValide){
        const newUser={id:uuid.v4(),name:req.body.name,email:req.body.email}
        data.push(newUser)
        res.redirect('/user/getData')
    }else{
        console.log('error')
        res.render('/user/addData',{name:req.body.name,email:req.body.email})
    }
    
})
//update USER

router.put("/",(req,res)=>{
    const userUpdate=data.find(user=>user.id === parseInt(req.body.selectUser))
        userUpdate.email=req.body.email ?req.body.email :userUpdate.email
        userUpdate.name=req.body.name ?req.body.name :userUpdate.name        
        res.redirect('user/getData')
    
})

//delete user
router.delete('/',(req,res)=>{
   data=data.filter(user=>user.id != parseInt(req.body.selectUser))
    res.redirect('/user/getData')
})
module.exports=router