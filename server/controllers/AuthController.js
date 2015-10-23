var User= require('../models/User.js');

module.exports = {
	create: function(req, res) {
		User.create(req.body, function(err, result) {
			var user = new User(req.body);
			user.save(function(err, newUser){
				if (err) {
					return res.status(500).send(err)
				}
				else{
						res.json(result);
					}
			})
		})
	},
	
	checkUser: function(req, res){
		User.count({'email': req.params.id}, function (err, count){ 
    		if(count>0){
				console.log(count)
				res.json(true)
   			}
			else res.json(false)
		}); 
	}
}