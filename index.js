const express = require('express');
const multer=require('multer');
const path=require('path')



const app=express();
const UPLOAD_DIR='./upload/'

let storage=multer.diskStorage({
    destination:(req,file,cd)=>{
        cd(null,UPLOAD_DIR)
    },
    filename:(req,file,cb)=>{
        const fileextn=path.extname(file.originalname);
        const name=file.originalname.replace(fileextn,"")
        .toLowerCase()
        .split(" ")
        .join("-")+"-"+Date.now();
        cb(null,name+fileextn)
    }
})

var upload=multer({
    storage:storage,
    limits:{
        fileSize:1000000,
    },
    fileFilter:(req,file,cb)=>{
        console.log(file);
        if(file.fieldname==='images'){
            if(file.mimetype==='image/png'|| file.mimetype==='image/jpeg'){
                cb(null,true)
            }else{
                cb(new Error('Only .png or .jpeg allow others is rejected!'))
            }
        }
        else if(file.fieldname==='files'){
            if(file.mimetype==='application/pdf'){
                cb(null,true)
            }else{
                cb(new Error('Only .pdf extention is allowed'))
            }
        }
        else{
            cb(new Error('Internal Error'))
        }
        
    }
})

app.post('/',upload.fields([
    {name:'images',maxCount:1},
    {name:'files',maxCount:1},
]),(req,res,next)=>{
    // console.log(multer);
    res.sendStatus(200)
}) 

// app.post('/',upload.single('images'),(req,res,next)=>{
//     // console.log(multer);
//     res.send('Success')
// }) 

app.use((err,req,res,next)=>{
    if(err){
        res.sendStatus(err.message)
    }else{
        res.send("Success")
    }
})

app.listen(3000,()=>{
    console.log('Server is on 3000');
})