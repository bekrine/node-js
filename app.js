#!/usr/bin/env node
// import data from '../data'
// const express=require('express')
// const http = require('http')
import express from 'express'
import http from 'http'
const app=express()
const hostname="127.0.0.1"
const port = 3000

const data ={
    user:1,
    name:"mm",
    id:1
} 

app.get('/',(req,res)=>{
    res.json(data)
})


app.listen(300,(req,res)=>{
    console.log("Server is running at port 3000");
})


// const server=http.createServer((req,res)=>{
//     res.statusCode=200
//     res.setHeader('Content-Type', 'text/plain')
//      res.end(JSON.stringify({number:1,name:"simo"}))
// })

//  server.listen(port,hostname,()=>{
//      console.log(`server running at http://${hostname}:${port}/ `)
//  })




// process.on('SIGTERM',()=>{
//     server.close(()=>{
//         console.log('process terminated')
//     })
// })