


var express = 		require('express'),
 	bodyParser = 	require('body-parser'),
 	cors = 			require('cors'),
 	mongoose = 		require('mongoose'),
	AWS = require ('aws-sdk'),
	expressSesh =	require('express-session'),
	passport=		require('passport'),
	localStrategy =	require('pasport-local').Strategy
 	port = 8008;
 
 var ImageController = require('./server/controllers/ImageController')
 var ShowsController = require('./server/controllers/ShowsController')
  var EmailController = require('./server/controllers/EmailController')
 var app = express().use(express.static(__dirname + '/public'));
 

app.use(bodyParser.json({limit: '50mb'}));
// app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use(cors());


//endpoints

app.get(	'/show', 		ShowsController.read);
app.get(	'/showdata/:artist',ShowsController.readArtist);
app.get(	'/show/:MId',	ShowsController.readMId);
app.post(	'/show', 		ShowsController.create);
app.put(	'/show/:id', 	ShowsController.update);
app.delete(	'/show/:id', 	ShowsController.delete);

app.post(	'/emails',		EmailController.create)
app.get(	'/email/:id',	EmailController.read)
app.get(	'/emails/',		EmailController.readAll)
app.get(	'/verifyemail/:id', EmailController.verifyread)
app.delete(	'/email/:id', 	EmailController.delete);

app.get(	'/images',		ImageController.get)
app.post(   '/images',      ImageController.create)



var mongoURI = 'mongodb://localhost:27017/velour';
mongoose.set('debug', true);
mongoose.connect(mongoURI);
mongoose.connection.once('open', function(){
		console.log('connected to mongodb at: ', mongoURI)
	});

app.listen(port, function() {
		console.log('listening on port ', port);
	});