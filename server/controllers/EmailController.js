
var Email= require('../models/Email');

module.exports = {
	create: function(req, res) {
				Email.create(req.body, function(err, result) {
					if (err) {
						return res.status(500).send(err)}
						else{
					res.json(result);
					}
				})
	}
}