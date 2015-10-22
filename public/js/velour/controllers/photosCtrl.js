angular.module('velourApp').controller('photosCtrl', function($scope, photoService){
	$scope.getInstaFeed= function(){
		photoService.getPhotos().then(function(res){
			$scope.instaFeed = res.data.data

			return res.data.data
		})
	}
	
	$scope.getInstaFeed()
})