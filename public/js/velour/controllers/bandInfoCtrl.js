angular.module('velourApp').controller('bandInfoCtrl', function($scope, $timeout, bandInfoService){

	

	$scope.getBandInfo = function(artist){
		bandInfoService.getBandInfo(artist).then
	}
	
	// $timeout(function(){

	// 	 		$scope.$apply()
	// 			console.log($scope.artist,'timeout')				
	// 		}, 5000)
	
	var getWeekDay=function(month,day,year){
		var weekday = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
		var dateToString = month.toString()+'/'+day.toString()+'/'+year.toString();
		var weekDayNum =function(day,month,year){
			return new Date(dateToString).getDay();
		}
		return weekday[weekDayNum(month,day,year)]	
	}
	
	// console.log(getWeekDay(10,20,2015))

	$scope.artist= {
		artist: 'LEMAITRE',
		date: {
			month: 10,
			day: 20,
			year:2015
			},
		time:{
			hour:7,
			minute:30
			},
		price: 30,
		description: "He says he's found the main computer to power the tractor beam that's holding the ship here. He'll try to make the precise location appear on the monitor. The tractor beam is coupled to the main reactor in seven locations. A power loss at one of the terminals will allow the ship to leave. I don't think you boys can help. I must go alone. Whatever you say. I've done more that I bargained for on this trip already. Be patient, Luke. Stay and watch over the droids. But he can..."
	}
	
	$scope.artist.weekday=getWeekDay($scope.artist.date.month,$scope.artist.date.day,$scope.artist.date.year);
	

	
})



