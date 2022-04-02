const express = require('express');
// const handler=require('./handler');


const app=express();
const admin=express();
const dashboard=express();

app.use('/admin',admin);
admin.use('/dash',dashboard);

app.disabled('trust proxy')


// app.locals
// app.locals.name="Habibur Rahman Sobuj"

// admin.on('mount',(parent)=>{
//     console.log("Admin app fired");
//     console.log(parent);
// })

admin.get('/',(req,res)=>{
    // console.log(dashboard.mountpath);
    res.send('I am admin app')
});
app.get('/',(req,res)=>{
    console.log(app.locals.name);
    res.send('I am dash')
});

// app.get('/',handler);

app.listen(3000,()=>{
    console.log('Server is on 3000');
})