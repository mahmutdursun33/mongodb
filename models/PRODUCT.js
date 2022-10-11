const mongoose=require('mongoose');
const productschema=new mongoose.Schema({
    name:{type:String,reqired:true },
    price:{type:Number, required:true},
    description:{type:String, required:true},
    createdat:{
        type:Date,
        default:Date.now
    }
})

module.exports=mongoose.model("PRODUCT",productschema);