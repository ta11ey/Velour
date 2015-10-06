angular.module('velourApp').controller('adminCtrl',function($scope, adminService){
		
		$scope.showUpdate = false;
		
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
				adminService.findShow().then(function(response){
					$scope.shows = response
				})		
			};
			
		$scope.deleteShow = function(id){
			adminService.deleteShow(id)
		}
		
		$scope.updateShow = function(id, data){
			adminService.updateShow(id, data)


		}
		
		
})
