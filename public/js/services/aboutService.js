angular.module('velourApp').service('aboutService', function($http){
	var url = 'http://localhost:8008'
	var manKey = 'Wx-XtIf6RA9aNM5TMAKtAA'
	this.postEmail = function(data){
							return $http({
								method:'post',
								url: url + '/emails/',
								data: data
							})
						}
	this.verificationEmail = function(email, name, code){
								return $http({
									method: 'POST',
									url: 'https://mandrillapp.com/api/1.0/messages/send.json',
									data: {
										'key':  manKey,
										'message': {
										"global_merge_vars": [
												{
													"code": code
												}
           									],
										'from_email': 'jacob.talley@hotmail.com',
										'to': [
											{
												'email': email,
												'name': name,
												'type': 'to'
											}
											],
										'autotext': 'true',
										'subject': 'Velour Verification',
										'html': '<h1>Great Scott, weve done it!!</h1><br>key: ' + '<p>'+code +'</p>'
										}
									}
									})
								}
	
})