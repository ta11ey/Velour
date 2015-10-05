angular.module('velourApp').controller('mainCtrl',function($scope, mainService){
	
	$scope.todaysDate = mainService.getDate()
	$scope.showSorter = mainService.showSorter;
	$scope.getShows = mainService.getShows;
	var unsortedShowsFromAF = [];// check about altering global functions!!!!!!!

	$scope.daysWithShows = function(){
		var showDays = [];
		for(var show in mainService.calendar)
			if(mainService.calendar[show].isShow){
				showDays.push(mainService.calendar[show])
		}
		return showDays
	}


	
	
	// console.log(mainService.calendar)



	$scope.getShows()
		.then(function(response){
				for (var show in response){
					unsortedShowsFromAF.push(response[show])
				}
			}).then(function(){
			 		$scope.showSorter(unsortedShowsFromAF, mainService.calendar)
				}).then(function(){ 
					$scope.Shows=$scope.daysWithShows();
					console.log($scope.Shows)
				})


})