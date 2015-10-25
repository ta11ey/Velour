var Post = require('../models/Post');

module.exports = {
	create: function(req, res) {
		Post.create(req.body, function(err, result) {
			if (err) {
				return res.status(500).send(err)
			}
				else{
					res.json(result);
				}
		})
	},
	read: function(req, res) {
		Post.find({})
			.exec(function(err, result){
				if (err) return res.send(err);
					res.json(result);
			})
	},
	get: function(req, res){
		Post.findById(req.params._id, function(err, response){
			if(err){
				return res.status(500).send(err)
			}
			else{
				res.json(response)
			}
		})
	},
	
	delete: function(req, res) {
		Post.findByIdAndRemove(req.params.id, function(err, result) {
			if (err) return res.status(500).send(err);
				res.json(result);
		})
	}
}