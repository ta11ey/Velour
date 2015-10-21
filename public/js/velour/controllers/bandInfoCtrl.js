angular.module('velourApp').controller('bandInfoCtrl', function($scope, $timeout, bandInfoService, bandInfo, $rootScope){

	// $scope.UpcomingShowsFromCalendarToggle = function(){
	// 	$rootScope.toggleUpcomingShowsTrue();
	// }
	// $scope.UpcomingShowsFromCalendarToggle();


	console.log(bandInfo)
	
	var getWeekDay=function(month,day,year){
		var weekday = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
		var dateToString = month.toString()+'/'+day.toString()+'/'+year.toString();
		var weekDayNum =function(day,month,year){
			return new Date(dateToString).getDay();
		}
		return weekday[weekDayNum(month,day,year)]	
	}
	$scope.bandInfoShows = bandInfo;	
	$scope.bandInfoShows.weekday=getWeekDay($scope.bandInfoShows.date.month,$scope.bandInfoShows.date.day,$scope.bandInfoShows.date.year);

})



