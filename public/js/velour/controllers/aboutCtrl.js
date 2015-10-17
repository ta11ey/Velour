angular.module('velourApp').controller('aboutCtrl', function($scope, aboutService){
	$scope.postEmail = function(email, name){
								
								
								var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
								
								if (!filter.test(email)){
									console.log('not valid');
								}
								else{
									 aboutService.verifyEmail(email).then(function(res){
										 if(res.data){
											 console.log(res.data, 'it exists')
										 }
										 else{
											 var code = Math.random().toString(36).slice(2);
											var data = { "email": email,
														"name":  name,
														"code": code
												}
											 aboutService.postEmail(data).then(function(){console.log('success')})
											 aboutService.verificationEmail(email, name, code)
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
								
							}
	
	
								
})