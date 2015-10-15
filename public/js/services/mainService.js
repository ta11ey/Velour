angular.module('velourApp').service('mainService', function($http){



	this.getDate = function(){
			var weekday = new Array(7);
			weekday[0]=  "Sunday";
			weekday[1] = "Monday";
			weekday[2] = "Tuesday";
			weekday[3] = "Wednesday";
			weekday[4] = "Thursday";
			weekday[5] = "Friday";
			weekday[6] = "Saturday";
			var dt = new Date();
			todaysDate = weekday[dt.getDay()]+" "+(dt.getMonth() + 1) + " / " + dt.getDate();
			return todaysDate;
		}
	
	var url = 'http://localhost:8008'
	this.getShows = function(){
		return $http({
			method: 'GET',
			url: url + '/show'
			}).then(function(response){
					var showsData = response.data;
					var shows = [];
					for (var show in showsData) {
							var showsObj = {
								id: showsData[show]._id,
								artist: showsData[show].artist,
								date: {
										day:showsData[show].date.day,
										month:showsData[show].date.month,
										year:showsData[show].date.year
										
									},
								time:{
										hour:showsData[show].time.hour,
										minute:showsData[show].time.minute
									},
								description:showsData[show].description,
								price:showsData[show].ticketPrice									
							}
							shows.push(showsObj)
						}
					
					return shows;
				})
		};
})

