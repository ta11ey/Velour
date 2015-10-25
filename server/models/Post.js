var mongoose = require('mongoose')


var PostSchema = new mongoose.Schema({
    title:      {type: String, required:true },
    subtitle:   {type: String},
    date:       {type: String},
    post:       {type:String, required:true }
    
})


module.exports = mongoose.model('Post', PostSchema);