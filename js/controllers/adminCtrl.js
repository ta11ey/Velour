angular.module('velourApp').controller('adminCtrl',function($scope, adminService){
		
		
		
		$scope.addShow = function(artist, day, month, year, hour, minute, description, price) {
			var data = {
				artist: artist,
				date: {
					day: day,
					month: month,
					year: year
				},
				time: {
					hour: hour,
					minute: minute
				},
				description: description,
				price: price
			}
			
			adminService.addShow(data).then(function(response) {
				console.log('succesfully added to database!')
			});
		};
		$scope.test = 'test';
})
