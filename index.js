const express=require('express');
const app=express();
const productsRouter=require('./route/products.js')
const isloggedin=true;
const mongoose=require('mongoose');
const bodyparser=require('body-parser')

app.use(bodyparser.json())

mongoose.connect('mongodb+srv://mahmutdursuncan:mahmut123@cluster0.fs5wh0e.mongodb.net/?retryWrites=true&w=majority',
e=>{
if(e){
    console.log(e);
}else{
    console.log("connected to database");                                   
}
})

app.use((req,res,next)=>{
    if(!isloggedin){
        res.send("you must be logged in to view this page");
    }else{
        next()
    }
})
app.get('/',(req,res)=>{
    res.send("hello world")
})

app.use('/products',productsRouter)
app.listen(5000,()=>{
    console.log("server running");
});


//fetch productsş   //get
//get products//id: //get
//create products   //post
//update products   //put
//delete products   //delete
