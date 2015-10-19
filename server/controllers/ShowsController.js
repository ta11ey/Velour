
var Artist= require('../models/Artist');

module.exports = {
	create: function(req, res) {
		Artist.create(req.body, function(err, result) {
			if (err) {
				return res.status(500).send(err)}
			else{
				res.json(result);
			}
		})
	},
	
	read: function(req, res){
		Artist.find().exec(function(err, result){
			if (err) return res.status(500).send(err);
				res.json(result);
		})
	},
	
	readArtist: function(req, res) {
		Artist.find({'artist':req.params.artist})
			.exec(function(err, result){
				if (err) return res.status(500).send(err);
					res.json(result);
			})
	},
	readMId: function(req, res) {
		Artist.find({'date.month':req.params.MId})
			.exec(function(err, result){
				if (err) return res.status(500).send(err);
					res.json(result);
			})
	},
	
	update: function(req, res) {
		Artist.findByIdAndUpdate(req.params.id, req.body, {new:true}, function(err, result) {
			if (err) return res.status(500).send(err);
				res.json(result);
			});
	},
	
	delete: function(req, res) {
		Artist.findByIdAndRemove(req.params.id, function(err, result) {
			if (err) return res.status(500).send(err);
				res.json(result);
		});
	}
	
	
}