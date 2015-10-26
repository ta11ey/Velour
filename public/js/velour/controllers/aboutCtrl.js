angular.module('velourApp').controller('aboutCtrl', function($scope, aboutService, $timeout, $state, $location){
	
	$scope.isActive = function(route) {
		var newroute = '/home'+route;
        return newroute === $location.path();
		
	}
	
	$scope.SignUpToggle = true;
	$scope.newsLetterSignUpToggle = function(){
		
		return
	}
	
	$scope.goToRedeem = function(){
		$state.go('velour.redeem')
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
		aboutService.verifyEmail(email).then(function(res){
				if(res.data){
					aboutService.getEmail(email).then(function(result){
						if (result === code){
							aboutService.freeTicketEmail(email);
						}
						else {
						$scope.noEmailExists = true;
						$timeout(function(){$scope.noEmailExists = false}, 3000)
						}
					})
				}
				else{
					$scope.noEmailExists = true;
						$timeout(function(){$scope.noEmailExists = false}, 3000)}
		})
		
				
	};
	
	$scope.getPosts = function(){
		aboutService.getPosts().then(function(res){
			var resortedRes = [];
			for (var i = res.length-1; i >= 0; i--){
				resortedRes.push(res[i])
			}
			$scope.newsLetter = resortedRes;
			$scope.goToPost($scope.newsLetter[0]._id)
		})
	}
	
	$scope.getPosts();
	
	$scope.goToPost = function(_id){
		$state.go('velour.about.newsLetter',{
			_id: _id
		})
	}
	

								
})