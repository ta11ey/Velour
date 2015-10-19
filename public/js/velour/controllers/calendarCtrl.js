angular.module('velourApp').controller('calendarCtrl', function($scope, calendarService, $location){
	var date = new Date();
	var month = ['placeHolderFor0','January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
	var currentMonth = date.getMonth()+1; //month based off of 1-12
	var currentYear = date.getYear() ;
	var getMonthShows = calendarService.getMonthShows
	
	$scope.weekDayNum = function(){
		var weekday = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
		return date.getDay()					
	}();
						
	$scope.month = function(){
		return month[currentMonth];
	}();
	
	$scope.previousMonth = function(){
		if (currentMonth > 1) {
			currentMonth = currentMonth -1;
			$scope.month = month[currentMonth];
		}
		viewMonthCalendar();
	}
	
	$scope.nextMonth = function(){
		if (currentMonth < 13) {
			currentMonth = currentMonth +1;
			$scope.month = month[currentMonth];
		}
		viewMonthCalendar();
	}	
	
	var viewMonthCalendar = function(){
		$scope.calendar = [];
		$scope.$index = 1; //days  displayed on the month
		$scope.placeholder = [];			
		var monthStartDay = (function(){
			var startDayNum = new Date(2015, (currentMonth - 1), 01).getDay()
			return startDayNum;
		})();
		var placeHolderCreater = (function(){
			if (monthStartDay <= 5){
				for (var i = 0; i  < monthStartDay; i ++){
					$scope.placeholder.push({})
				}
			}
		})();
									
		var daysInMonth = (function(month,year) {
			var numOfDays = new Date(year, month, 0).getDate();
			return numOfDays 
		})((currentMonth), currentYear)
											
		for (var i = 1; i <= daysInMonth; i++){
			$scope.calendar.push({day:(i), shows: []})
		}
							
		getMonthShows(currentMonth)
			.then(function(response){
				for (i = 0; i <=$scope.calendar.length; i++){
					for (var show in response.data){
						if(response.data[show].date.day === (i)){
							$scope.calendar[i-1].shows.push(response.data[show].artist)// i-1 because calendar is an array starting at 0
						}
					}
				}
			})
	}
		
	viewMonthCalendar();
	$scope.hideUpcomingShows = function(){
		$scope.calendarToggle = false;
	}
 
})