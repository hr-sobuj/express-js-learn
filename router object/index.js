const express = require('express');


const app=express();

const router=express.Router();


app.use('/admin',router);


router.param((user,id)=>{
    return (req,res,next,user)=>{
        req.user=user===id?'Admin':'Guest'
        next();
    }
})


router.param('user','2')


router.get('/:user',(req,res)=>{
    res.send(`Hello ${req.user}`);
}) 


app.listen(3000,()=>{
    console.log('Server is on 3000');
})