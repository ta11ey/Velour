var Image = require('../models/Image');
var AWS = require('../services/imageService');

module.exports.get = function(req,res){
	Image.find({}, function(err, data) {
		if (err) {
			console.log(err)
		}
		res.send(data)
	})
}

module.exports.create = function(req, res){
	var buf = new Buffer(req.body.fileBody.replace(/^data:image\/w+;base64,/,""), 'base64')
	var fileObj = {
		fileName: req.body.fileName,
		fileBody: buf,
		fileType: req.body.fileType
	}
	AWS.uploadToS3(fileObj, function(err, data){
		if (err){
			console.log(err)
			res.status(500).send(err)
		} else {
			new Image({ imageUrl : data.Location }) //whats this doing?
            .save(function(err, image) {
                if (err) {
                    console.log(err)
                    res.status(500).send(err)
                } else {
                    res.send(image)
                }
            })
		}
	})
}