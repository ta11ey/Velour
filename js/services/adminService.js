angular.module('velourApp').service('adminService', function($http){
	
	var url = 'http://localhost:8008'
	// var addedShows = $firebaseArray(new Firebase(url + '/shows'));
	
	this.addShow = function(data){
		$http({
			method: 'POST',
			url: url + '/show',
			data: data
			})
	}
	
	// this.addShow = function(Artist, Day, Month, Year, Hour, Description, Price){
	// 				addedShows({
	// 						"artist": Artist,
	// 						"date":{
	// 							"day":Day,
	// 							"month":Month,
	// 							"year":Year
	// 								},
	// 						"time":{
	// 								"hour":Hour,
	// 								"minute":Minute
	// 								},
	// 						"description":Description,
	// 						"ticketPrice":Price
	// 					})
	// 					.then(function(){alert("sucessfully added " + Artist)});
	// 		}
})