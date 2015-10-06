angular.module('velourApp').controller('mainCtrl',function($scope, mainService){
	
	$scope.todaysDate = mainService.getDate();
	
	$scope.daysWithShows = function(){
		var showDays = [];
		for(var show in mainService.calendar)
			if(mainService.calendar[show].isShow){
				showDays.push(mainService.calendar[show])
		}
		return showDays
	};

	$scope.getSideShows = function(){
		mainService.findShow()
			.then(function(response){
					$scope.Shows = response
				})
	}
	
	$scope.getSideShows();
	
	

})