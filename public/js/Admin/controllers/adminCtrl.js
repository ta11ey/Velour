angular.module('velourApp').controller('adminCtrl',function($scope, adminService, $location){
		
		$scope.isActive = function(route) {
        	return route === $location.path();
		}
		$scope.showAdd = true;
		$scope.showUpdateButton = false;
		
		$scope.toggleUpdateView = function(){
			if ($scope.showAdd) {
				$scope.showUpdateButton = true;
				$scope.showAdd = false;
			}										
		}
		
		$scope.toggleAddView = function(){
			if($scope.showUpdateButton) {
				$scope.showUpdateButton = false;
				$scope.showAdd = true;
			}
		}
/**************************************************** */	


		$scope.clearBandForm = function(a,b,c,d,e,f,g,h){
			$scope.artist = "";
		}																		
		$scope.showUpdate = false;
		
		 
		$scope.addShow = function(artist, day, month, year, hour, minute, description, price) {
			var data = {
				"artist": 	artist,
				"date":{
						"day":	day,
						"month":month,
						"year":	year
				},
				"time":{
						"hour":	hour,
						"minute":minute
				},
				"description":description,
				"ticketPrice":price
			};
				
			adminService.addShow(data).then(function(response) {
				$scope.toggleUpdateView();
				$scope.findShow();
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
		
/**************************************************** */
		$scope.getEmails= function(){
			adminService.getEmails().then(function(res){
				$scope.emails=res
			})
		}
		$scope.getEmails();
		
		$scope.deleteEmail =function(email){
			adminService.deleteEmail(email).then(function(){$scope.getEmails()});
		}
/**************************************************** */
		$scope.getImages = function(){
			adminService.getImages().then(function(res){
				$scope.images = res.data;
				console.log(res)
			})
		}

/****************************newsLetter************************ */
		
		$scope.addPostView = true;
		$scope.updatePostView = false;
		
		$scope.toggleAddPostView = function(){
			$scope.addPostView = true;
			$scope.updatePostView = false;
		};
		
		$scope.toggleUpdatePostView = function(){
			$scope.addPostView = false;
			$scope.updatePostView = true;			
		}
		
		
		
		$scope.getPosts= function(){
			adminService.getPosts().then(function(res){
				$scope.newsletter=res.data
			})
		}
		
		$scope.deletePost =function(id){
			console.log('ctrl delete hit')
			adminService.deletePost(id)
		}
		
		$scope.addPost = function(data) {
			adminService.addPost(data).then(function(response) {
				$scope.toggleUpdatePostView();
				$scope.getPosts();
				console.log('succesfully added to database!')
			});
		};
})