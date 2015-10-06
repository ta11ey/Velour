angular.module('velourApp').controller('calendarCtrl', function($scope, calendarService){
	var date = new Date();
	var month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
	var currentMonth = date.getMonth();
	var currentYear = date.getYear() ;
	
						
	$scope.month = function(){
			return month[date.getMonth()];
		}
	$scope.previousMonth = function(){
		currentMonth = currentMonth -1;
		console.log(currentMonth)
	}
	


	
	
	var viewMonthCalendar = function(){
			$scope.calendar = [];
			var daysInMonth = (function(month,year) {
    						var numOfDays = new Date(year, month, 0).getDate();
							return numOfDays + 1
						})(currentMonth, currentYear)
						
			for (var i = 0; i < daysInMonth; i++){
				$scope.calendar.push({})
			}
		
		}
		
		viewMonthCalendar();
	
	console.log($scope.calendar)
})