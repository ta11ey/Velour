angular.module('velourApp').service('photoService', function($http){
	this.getPhotos = function(){
						return $http({
							method:'JSONP',
							url: 'https://api.instagram.com/v1/users/25204415/media/recent/?client_id=c57fca1cbfee4fa881b557e38fb948f8&callback=JSON_CALLBACK'
						})

	}
	
})