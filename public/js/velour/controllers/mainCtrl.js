angular.module('velourApp').controller('mainCtrl',function($scope, mainService){
	
	var date = new Date();
	var currentMonth = date.getMonth()+1;
	var currentDay = date.getDate();
	var firstBy=function(){function n(n,t){if("function"!=typeof n){var r=n;n=function(n,t){return n[r]<t[r]?-1:n[r]>t[r]?1:0}}if(1===n.length){var u=n;n=function(n,t){return u(n)<u(t)?-1:u(n)>u(t)?1:0}}return-1===t?function(t,r){return-n(t,r)}:n}function t(t,u){return t=n(t,u),t.thenBy=r,t}function r(r,u){var f=this;return r=n(r,u),t(function(n,t){return f(n,t)||r(n,t)})}return t}();
	$scope.Shows = [];
	$scope.todaysDate = mainService.getDate();

	$scope.getSideShows = function(){
		mainService.getShows()
			.then(function(response){
					var shows = response;
					shows.sort(firstBy(function(a,b){
												return a.date.month - b.date.month
											}).thenBy(function(a,b){
														return a.date.day - b.date.day
													}));

					for (var i = 0; i < shows.length; i++){
							if (parseInt(shows[i].date.month) === currentMonth){
									if (shows[i].date.day >= currentDay){
											$scope.Shows.push(shows[i]);
										}
								}
							if (parseInt(shows[i].date.month) > currentMonth){
									$scope.Shows.push(shows[i])
								}
						}

				})
		}
	
	$scope.getSideShows();
	
	

})