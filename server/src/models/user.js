const mongoose = require ('mongoose');

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
},
{timestamps:true});

//export the user model
module.exports = mongoose.model('users',userSchema);