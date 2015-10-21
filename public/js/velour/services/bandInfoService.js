angular.module('velourApp').service('bandInfoService', function($http){
	var url = 'http://localhost:8008';
	this.getBandInfo = function(artist){
		return $http({
			method: 'get',
			url: url + '/showdata/' + artist
		}).then(function(res){
			return res.data[0]
			})
	}
	
	
})

