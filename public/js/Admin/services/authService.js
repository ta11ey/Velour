 angular.module('velourApp').service('authService', function($http){
	
	var url = 'http://localhost:8008'
	
	this.login = function(data){
		return $http({
			method: 'post',
			url: url + '/auth',
			data: data
		})
	},
	
	this.authorized = function(){
		return $http({
			method: 'get',
			url: url + '/getUser'
		}).then(function(res){
			console.log(res, 'service')
		})
	},
	
	this.checkUser = function(email){
		return $http({
			method: 'get',
			url: url +'/checkUser/'+email 
		}).then(function(res){return res.data})
	}
	
	
 })