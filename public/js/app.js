var app = angular.module('velourApp', ['ui.router']);

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
				.state('velour.contact', {
					url: '/contact',
					templateUrl: 'js/velour/templates/contactTmp.html',
					///controller: 'contactCtrl'
				})
				.state('velour.press', {
					url: '/press',
					templateUrl: 'js/velour/templates/pressTmp.html',
					//controller: 'pressCtrl'
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

		.state('admin', {
			url: '/admin',
			templateUrl: 'js/Admin/admin.html',
			controller: 'adminCtrl'
			})
				.state('admin.bands', {
					url: '/bands',
					templateUrl: 'js/Admin/templates/bands.html',
				})
				.state('admin.emails', {
					url: '/emails',
					templateUrl: 'js/Admin/templates/emails.html',
				})
				.state('admin.newsletter', {
					url: '/newsletter',
					templateUrl: 'js/Admin/templates/newsletter.html',
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

