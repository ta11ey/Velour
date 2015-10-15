var mongoose = require('mongoose');

var emailSchema = new mongoose.Schema ({
    email: {type: String, required:true },
    name:  {type: String, required:true },
    code: {type: String, required:true}
});

module.exports = mongoose.model('Email', emailSchema);