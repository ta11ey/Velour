var app = angular.module('velourApp', ['ui.router','ui.tinymce']);

app.config(function($stateProvider, $urlRouterProvider){
	$urlRouterProvider.otherwise('/home/main')
	
	$stateProvider
		.state('velour', {
			url: '/home',
			templateUrl: 'js/velour/home.html',
			controller: 'mainCtrl',
			})
				.state('velour.main', {
					url: '/main',
					templateUrl: 'js/velour/templates/homeTmp.html',
					controller: 'mainCtrl'
				})
				.state('velour.shows', {
					url: '/shows',
					templateUrl: 'js/velour/templates/calendarTmp.html',
					controller: 'calendarCtrl'
				})
				.state('velour.about', {
					url: '/about',
					templateUrl: 'js/velour/templates/aboutTmp.html',
					controller: 'aboutCtrl'
				})
					.state('velour.about.newsLetter', {
						url: '/newsletter/:_id',
						templateUrl: 'js/velour/templates/postTmp.html',
						controller: 'newsLetterCtrl',
						resolve: {
							getArticle: function($stateParams, newsLetterService){
								return newsLetterService.getArticle($stateParams._id)
							}
						}
					})
					
				.state('velour.redeem', {
					url: '/about',
					templateUrl: 'js/velour/templates/redeemTmp.html',
					controller: 'redeemCtrl'
				})
				
				.state('velour.contact', {
					url: '/contact',
					templateUrl: 'js/velour/templates/contactTmp.html',
					///controller: 'contactCtrl'
				})
				.state('velour.photos', {
					url: '/photos',
					templateUrl: 'js/velour/templates/photosTmp.html',
					controller: 'photosCtrl'
				})
				.state('velour.store', {
					url: '/store',
					templateUrl: 'js/velour/templates/storeTmp.html',
					//controller: 'storeCtrl'
				})
				.state('velour.bandInfo', {
					url: '/bandInfo/:artist',
					templateUrl: 'js/velour/templates/bandInfoTmp.html',
					controller: 'bandInfoCtrl',
					resolve: {
						bandInfo: function ($stateParams, bandInfoService) {
							return bandInfoService.getBandInfo($stateParams.artist)
						}
					}
				})
				
		.state('login',{
			url: '/login',
			templateUrl: 'js/Admin/templates/login.html',
			controller: 'authCtrl'
		})
		.state('admin', {
			url: '/admin',
			templateUrl: 'js/Admin/admin.html',
			controller: 'adminCtrl',
			resolve: {
				isAuthed: function(authService){

					return authService.authorized().then(function(res){return res})
				}
			}
			})
				.state('admin.bands', {
					url: '/bands',
					templateUrl: 'js/Admin/templates/bands.html',
					resolve: {
						isAuthed: function(authService){
							return authService.authorized().then(function(res){return res})
						}
					}
				})
				.state('admin.emails', {
					url: '/emails',
					templateUrl: 'js/Admin/templates/emails.html',
					resolve: {
						isAuthed: function(authService){
							return authService.authorized().then(function(res){return res})
						}
					}					
				})
				.state('admin.newsletter', {
					url: '/newsletter',
					templateUrl: 'js/Admin/templates/newsletter.html',
					resolve: {
						isAuthed: function(authService){
							return authService.authorized().then(function(res){return res})
						}
					}					
				})
		
				
		
})

.directive('fileread', function(adminService){
	return {
		link: function(scope, elem, attr){
			elem.bind('change', function(e){
				var file = elem[0].files[0]
				
				var reader = new FileReader();
				
				reader.onload = function(loadEvent) {
					var fileBody = reader.result;
					
					adminService.uploadImage(fileBody, file).then(function(res){
						// scope.images.push(res.data)
					})
				}
				
				reader.readAsDataURL(file)
			})
		}
	}
})

.directive('upcomingShows', function(mainService, $state){
	return{
		restrict: 'E',
		templateUrl: 'js/velour/templates/upcomingShowsTmp.html',
		link: function(scope, elem, att){
				var date = new Date();
				var currentMonth = date.getMonth()+1;
				var currentDay = date.getDate();
				var currentYear = date.getYear()+1900; //current 4 number year
				var firstBy=function(){function n(n,t){if("function"!=typeof n){var r=n;n=function(n,t){return n[r]<t[r]?-1:n[r]>t[r]?1:0}}if(1===n.length){var u=n;n=function(n,t){return u(n)<u(t)?-1:u(n)>u(t)?1:0}}return-1===t?function(t,r){return-n(t,r)}:n}function t(t,u){return t=n(t,u),t.thenBy=r,t}function r(r,u){var f=this;return r=n(r,u),t(function(n,t){return f(n,t)||r(n,t)})}return t}();
				
				scope.Shows = [];
				scope.todaysDate = mainService.getDate();
			
				
				scope.getSideShows = function(){
					mainService.getShows()
						.then(function(response){
							var shows = response;
							shows.sort(firstBy(function(a,b){
								return a.date.year - b.date.year
							}).thenBy(function(a,b){
								return a.date.month - b.date.month
							}).thenBy(function(a,b){
								return a.date.day - b.date.day
							}));
			
							for (var i = 0; i < shows.length; i++){
								if (shows[i].date.month === currentMonth){
									if (shows[i].date.day >= currentDay){
										scope.Shows.push(shows[i]);
									}
								}
								if (shows[i].date.month > currentMonth){
									scope.Shows.push(shows[i])
								}
								else if(shows[i].date.year > currentYear) {
									scope.Shows.push(shows[i])
								 }
							}
						})
				}
				
				scope.getSideShows();
				
				scope.getBandInfo = function(artist){
					$state.go('velour.bandInfo',{
						artist: artist
					})
				}
					}
					
					
				}
	
})

.filter('unsafe', function($sce) { 
		return $sce.trustAsHtml
});
