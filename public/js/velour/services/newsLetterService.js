angular.module('velourApp').service('newsLetterService', function($http){
	
	var url = 'http://localhost:8008'
	this.getArticle = function(_id){
		return $http({
			method: 'GET',
			url: url + '/getArticle/'+_id
		})
	}
})