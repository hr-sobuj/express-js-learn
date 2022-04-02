const express = require('express');
const fs=require('fs')

const app=express();


app.get('/',(req,res,next)=>{
    try{
        console.log(a);
    }catch(err){
        next(err)
    }

}) 

app.use((req,res,next)=>{
    next('Internal Error')
})


const errorHandler=(err,req,res,next)=>{
    if(err.message){
        res.send(err.message)
    }else{
        res.sendStatus(400,"There is an internal error")
    }
}

app.use(errorHandler)


app.listen(3000,()=>{
    console.log('Server is on 3000');
})