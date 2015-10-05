angular.module('velourApp').controller('adminCtrl',function($scope, adminService){
		

		$scope.addShow = function(artist, day, month, year, hour, minute, description, price) {
				var data = {
						"artist": 	artist,
						"date":{
									"day":day,
									"month":month,
									"year":year
								},
						"time":{
									"hour":hour,
									"minute":minute
								},
						"description":description,
						"ticketPrice":price
				};
				
				adminService.addShow(data).then(function(response) {
							console.log('succesfully added to database!')
						});
			};

		$scope.findShow = function(){
			adminService.findShow()
				.then(function(response){
					var showsData = response.data;
					var shows = [];
					for (var show in showsData) {
						var showsObj = {
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
					$scope.shows=shows;
				})
			
		}
})
