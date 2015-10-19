
var Email= require('../models/Email');

module.exports = {
	create: function(req, res) {
		Email.create(req.body, function(err, result) {
			if (err) {
				return res.status(500).send(err)
			}
				else{
					res.json(result);
				}
		})
	},
	
	read: function(req, res) {
		Email.find({'email':req.params.id})
			.exec(function(err, result){
				if (err) return res.send(err);
					res.json(result);
			})
	},
	readAll: function(req, res) {
		Email.find({})
			.exec(function(err, result){
				if (err) return res.send(err);
					res.json(result);
			})
	},
	verifyread: function(req, res){
		Email.count({'email': req.params.id}, function (err, count){ 
    		if(count>0){
				console.log(count)
				res.json(true)
   			}
			else res.json(false)
		}); 
	},
	delete: function(req, res) {
		Email.findByIdAndRemove(req.params.id, function(err, result) {
			if (err) return res.status(500).send(err);
				res.json(result);
		});
	}
}