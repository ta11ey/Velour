


var express = 		require('express'),
 	bodyParser = 	require('body-parser'),
 	cors = 			require('cors'),
 	mongoose = 		require('mongoose'),
	AWS = 			require ('aws-sdk'),
	expressSesh =	require('express-session'),
	passport=		require('passport'),
	LocalStrategy =	require('passport-local').Strategy,
 	port = 8008;
 
 
 var ImageController = require('./server/controllers/ImageController')
 var ShowsController = require('./server/controllers/ShowsController')
 var EmailController = require('./server/controllers/EmailController')
 var AuthController = require('./server/controllers/AuthController')
 var PostController = require('./server/controllers/PostController')
  
 var app = express().use(express.static(__dirname + '/public'));
 
/****************************MIDDLEWARE*****************************/

app.use(bodyParser.json({limit: '50mb'}));
// app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use(cors());
app.use(expressSesh({
	secret: 'topSecret',
	resave: false,
	saveUnitialized: true
// 	cookie: {
//     path: '/',
//     httpOnly: true,
//     secure: false
//   }
}))

/******************** Load User Schema *******************/
var User = require('./server/models/User')


/******************* Configure Passport ******************/
	app.use(passport.initialize());
	app.use(passport.session());
	
passport.use(new LocalStrategy({
	usernameField: 'email',
	passwordField: 'password'
}, function(email, password, done) {
	//define how we match user credentials to db values
	User.findOne({ email: email }, function(err, user){
		if (!user) {
			done(new Error("This user does not exist :)"));
		}
		user.verifyPassword(password).then(function(doesMatch) {
			if (doesMatch) {
				done(null, user);
			}
			else {
				done(new Error("Please verify your password and try again :)"));
			}
		});
	});
}));
	

var requireAuth = function(req, res, next) {
	console.log('requireAuth hit')
   if (!req.isAuthenticated()) {
	   
       return res.status(403).send({ message: "Logged In"   }).end();
   }
   return next();
}

passport.serializeUser(function(user, done) {
  done(null, user._id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id, function (err, user) {
    done(err, user);
  });
});


//******************* ENDPOINTS ******************/

app.get(	'/show', 			ShowsController.read);
app.get(	'/showdata/:artist',ShowsController.readArtist);
app.get(	'/show/:MId',		ShowsController.readMId);
app.post(	'/show', 			ShowsController.create);
app.put(	'/show/:id', 		ShowsController.update);
app.delete(	'/show/:id', 		ShowsController.delete);

app.post(	'/emails',			EmailController.create)
app.get(	'/email/:id',		EmailController.read)
app.get(	'/emails/',			EmailController.readAll)
app.get(	'/verifyemail/:id', EmailController.verifyread)
app.delete(	'/email/:id', 		EmailController.delete);

app.get(	'/images',			ImageController.get)
app.post(   '/images',      	ImageController.create)

app.get(	'/getPosts',		PostController.read)
app.post(   '/postPost',      	PostController.create)
app.get(	'/getArticle/:_id',	PostController.get)
app.delete( '/post/:id',      	PostController.delete)



app.post(	'/createUser',		AuthController.create)
app.get(	'/checkUser/:id',	AuthController.checkUser)
app.post(	'/auth',			passport.authenticate('local'),
	function(req,res){
		console.log('logged in' +req.user);
		return res.status(200).json(req.user).end();
	}
)

app.get(	'/getUser',			function(req, res){
	console.log('hit')
	if(req.user){
		console.log(req.user, 'true')
		return res.status(200).json(req.user)
	}
	else {
		console.log('false')
		res.status(403).end()
	}
})

// app.get(	'/logout',			AuthController.logout)



var mongoURI = 'mongodb://localhost:27017/velour';
mongoose.set('debug', true);
mongoose.connect(mongoURI);
mongoose.connection.once('open', function(){
		console.log('connected to mongodb at: ', mongoURI)
	});

app.listen(port, function() {
		console.log('listening on port ', port);
	});