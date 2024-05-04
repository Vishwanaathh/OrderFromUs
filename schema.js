const mongoose=require('mongoose');
const schema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    quantity:{
        type:String,
        required:true
    }
});
const model=mongoose.model('model',schema);
module.exports=model;