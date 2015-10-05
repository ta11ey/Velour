


var express = 		require('express'),
 	bodyParser = 	require('body-parser'),
 	cors = 			require('cors'),
 	mongoose = 		require('mongoose'),
 	port = 8008;
 
 var ShowsController = require('./server/controllers/ShowsController')
 var app = express().use(express.static(__dirname + '/public'));;

app.use(bodyParser.json());
app.use(cors());

//endpoints

app.get(	'/show', 		ShowsController.read);
app.post(	'/show', 		ShowsController.create);
app.put(	'/show/:id', 	ShowsController.update);
app.delete(	'/show/:id', 	ShowsController.delete);

var mongoURI = 'mongodb://localhost:27017/velour';
mongoose.connect(mongoURI);
mongoose.connection.once('open', function(){
		console.log('connected to mongodb at: ', mongoURI)
	});

app.listen(port, function() {
		console.log('listening on port ', port);
	});