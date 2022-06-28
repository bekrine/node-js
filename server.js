#!/usr/bin/env node

const express = require('express')
const override=require('method-override')
const bodyparser=require('body-parser')
const path=require('path')
const app=express()

app.use(override('_method'))
app.use(bodyparser.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname,'public')))
app.use(express.urlencoded({extended:true}))
app.set('view engine','ejs')

const userRouter =require('./routes/users')
app.use('/user',userRouter)

app.listen(300,(req,res)=>{
    console.log("Server is running at port 3000");
})
