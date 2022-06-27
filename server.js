#!/usr/bin/env node

const express = require('express')
const path=require('path')
const app=express()


app.use(express.static(path.join(__dirname,'public')))
app.use(express.urlencoded({extended:true}))
app.set('view engine','ejs')

const userRouter =require('./routes/users')
app.use('/user',userRouter)

app.listen(300,(req,res)=>{
    console.log("Server is running at port 3000");
})
