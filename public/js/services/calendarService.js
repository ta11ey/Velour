angular.module('velourApp').service('calendarService', function($http){
	var url = 'http://localhost:8008'
	this.getMonthShows = function(paramId){
							return $http({
								method:'GET',
								url: url + '/show/' + paramId
							})
						}
})