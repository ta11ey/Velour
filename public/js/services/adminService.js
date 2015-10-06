 angular.module('velourApp').service('adminService', function($http){
	
	var url = 'http://localhost:8008'
	
	
	this.addShow = function(data){
		return $http({
			method: 'POST',
			url: url + '/show',
			data: data
			})
	},
	
	this.findShow = function(){
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
		
	
	this.updateShow = function(id, data){
		 $http({
			method:'PUT',
			url: url + '/show/' + id,
			data: data
		})

	}
	
	this.deleteShow = function(id){
		$http({
			method:'DELETE',
			url: url + '/show/' +id
		}).then(function(){
			console.log('deleted show:' + id)
		})
	}
})