const express = require('express');


const app=express();
const admin=express();
const dashboard=express();


app.use('/admin',admin);
admin.use('/dashboard',dashboard);

console.log(dashboard.path());
dashboard.all('/',(req,res)=>{
 
    res.send('I am dash')
})

// app.set('view engine','ejs')

// app.param('id',(req,res,next,id)=>{
//     console.log(id);
//     next();
// })

// app.get('/admin/:id',(req,res)=>{
//     // res.send('I am dash');
//     res.render('template')
// });

// app.route()
// app.route('/about')
// .get((req,res)=>{
//     console.log();
//     res.send('I am get')
// })
// .post((req,res)=>{
//     console.log();
//     res.send('I am post')
// })

app.listen(3000,()=>{
    console.log('Server is on 3000');
})