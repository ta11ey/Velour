var app = angular.module('velourApp', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider){
	$urlRouterProvider.otherwise('/')
	
	$stateProvider
		.state('velour', {
			url: '/',
			templateUrl: 'js/velour/home.html',
			controller: 'homeCtrl',
			})
				.state('velour.main', {
					url: '/main',
					templateUrl: 'js/velour/templates/homeTmp.html',
					controller: 'calendarCtrl'
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
				.state('otherwise', {url: '/main'})
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

