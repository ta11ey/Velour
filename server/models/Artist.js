var mongoose = require('mongoose');

var artistSchema = new mongoose.Schema ({
    artist: {type: String, required:true },
    date:{
        day:{type: Number, required:true },
        month:{type:Number, required:true },
        year:{type: Number, required:true }
        },
    time: { 
        hour:{type: Number},
        minute:{type: Number}
         },
    description: {type:String},
    ticketPrice:{type: Number, required:true },
});

module.exports = mongoose.model('Artist', artistSchema);