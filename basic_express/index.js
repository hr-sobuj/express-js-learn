const express = require('express');

const app=express();

app.get('/',(req,res)=>{
    res.send('Hello I am home page with get method!')
})

app.listen(3000,()=>{
    console.log('Server is on 3000');
})