angular.module('velourApp').controller('photosCtrl', function($scope, photoService){
	photoService.getPhotos();
})