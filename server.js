const express=require('express');
const mongoose=require('mongoose');
const app=express();
const cors=require('cors');
app.use(cors());
const model=require('./schema');
app.use(express.json());
app.post('/',async(req,res)=>{
    const order=await model.create(req.body);
    res.status(200);
    res.send('Order Placed!');

});
mongoose.connect()
.then(()=>{
app.listen(3004,()=>{
    console.log("serving");
})})
