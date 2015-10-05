 angular.module('velourApp').service('adminService', function($http){
	
	var url = 'http://localhost:8008'

	
	this.addShow = function(data){
		return $http({
			method: 'POST',
			url: url + '/show',
			data: data
			})
	},
	
	this.findShow = function(){
		return $http({
			method: 'GET',
			url: url + '/show'
			})
	}
	
})