angular.module('velourApp').controller('aboutCtrl', function($scope, aboutService, $timeout, $state, $location){
	
	$scope.isActive = function(route) {
		var newroute = '/home'+route;
        return newroute === $location.path();
		
	}
	
	$scope.SignUpToggle = true;
	$scope.newsLetterSignUpToggle = function(){
		
		return
	}
	
	
	$scope.postEmail = function(email, name){
		var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;						
		if (!filter.test(email)){
			$scope.validEmail =true;
		}
		else{
			aboutService.verifyEmail(email).then(function(res){
				if(res.data){
					$scope.validEmail =false;
					$scope.emailExists = true;
				}
				else{
					$scope.SignUpToggle = false;

					var code = Math.random().toString(36).slice(2);
					var data = { "email": email,
								"name":  name,
								"code": code
					}
					aboutService.postEmail(data).then(function(){console.log('success')})
					aboutService.verificationEmail(email, name, code)
					$scope.emailThanks = true;
					$timeout(function(){$scope.emailThanks = false;}, 4000)
				}
			})																											
		}
	};
	
	$scope.verifyEmail = function(email, code){
		aboutService.getEmail(email).then(function(res){
			console.log(res)
			if (res.data[0].code === code){
				aboutService.freeTicketEmail(email);
			}
			else {
				console.log("the code didn't match")
			}
		})		
	};
	
	$scope.newsLetter = [
		{title:'yo'},
		{title:'yo'}
	]
	
	$scope.getPosts = function(){
		aboutService.getPosts().then(function(res){

			var resortedRes = [];
			for (var i = res.length-1; i >= 0; i--){
				resortedRes.push(res[i])
			}
			$scope.newsLetter = resortedRes
			console.log($scope.newsLetter)
		})
	}
	
	$scope.getPosts();
	
	$scope.goToPost = function(_id){
		$state.go('velour.about.newsLetter',{
			_id: _id
		})
	}
								
})