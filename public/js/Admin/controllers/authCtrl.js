angular.module('velourApp').controller('authCtrl', function($scope, authService, $state){
	
	$scope.login =function (email, password){
		var data = {
			email: email,
			password:password
		}
		
		authService.checkUser(email).then(function(res){
			if(res){
				if (authService.checkUser(email).then(function(res){return res})){
					authService.login(data).then(function(res){
						console.log(res)
						$state.go('admin')
					},
				function(){
						console.log('not authorized')
					})
				}			
			}
			else {console.log('no user found')}
		})
		
	}
})