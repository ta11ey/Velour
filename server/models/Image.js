var mongoose = require('mongoose');


var ImageSchema = new mongoose.Schema({
    imageUrl : String
})


module.exports = mongoose.model('Image', ImageSchema);