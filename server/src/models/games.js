const mongoose = require ('mongoose');

const gameSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true
    },
    date:{
        type:Date,
        required:true
    },
    file:{
        type:String,
        required:true
    }
});

//export the game model
module.exports = mongoose.model('games',gameSchema);