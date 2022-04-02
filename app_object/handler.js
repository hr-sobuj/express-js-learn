const handler=(req,res)=>{
    console.log(req.app.locals.name);
    res.send('Hello I am home page with get method!')
}

module.exports=handler