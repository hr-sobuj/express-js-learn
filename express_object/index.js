const express = require('express');

const app=express();

const route=express.Router();
app.use(route)
// app.use(express.static(`${__dirname}/public`));
// app.use(express.text());
// app.use(express.urlencoded());
// app.use(express.raw());
// app.use(express.json());

route.get('/',(req,res)=>{
    // console.log(route);
    res.send('Hello I am home page with get method!')
})

app.listen(3000,()=>{
    console.log('Server is on 3000');
})