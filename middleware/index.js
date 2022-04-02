const express = require('express');


const app=express();

const adminRoute=express.Router();


const optionMiddleware=(options)=>{
    return (req,res,next)=>{
        if(options){
            console.log(`${Date.now().toLocaleString()}-${req.ip}-${req.method}`);
            res.end()
        }
        else{
            throw new Error('this is an error');
        }
        
    }
}

const logger=(req,res,next)=>{
    console.log(`${Date.now().toLocaleString()}-${req.ip}-${req.method}`);
    throw new Error('this is an error');
}

app.use('/admin',adminRoute);

adminRoute.use(optionMiddleware(false))

adminRoute.get('/dashboard',(req,res)=>{
    res.send('I am main dashboard')
})


app.get('/',(req,res)=>{
    res.send('I am main root')
})

const errorHandle=(err,req,res,next)=>{
    console.log(err);
    console.log('this function is called error');
    res.status(400).send('Error');
}

adminRoute.use(errorHandle);

app.listen(3000,()=>{
    console.log('Server is on 3000');
})