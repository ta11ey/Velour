angular.module('velourApp').controller('newsLetterCtrl', function($scope, getArticle){

		$scope.post = getArticle;
	
})