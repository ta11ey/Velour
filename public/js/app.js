var app = angular.module('velourApp', ['ngRoute']);

app.config(function($routeProvider){
	$routeProvider
		.when('/home', {
			templateUrl: 'js/templates/homeTmp.html',
			controller: 'homeCtrl',
		})
		.when('/shows', {
			templateUrl: 'js/templates/calendarTmp.html',
			controller: 'calendarCtrl'
		})
		.when('/about', {
			templateUrl: 'js/templates/aboutTmp.html',
			//controller: 'aboutCtrl'
		})
		.when('/contact', {
			templateUrl: 'js/templates/contactTmp.html',
			///controller: 'contactCtrl'
		})
		.when('/press', {
			templateUrl: 'js/templates/pressTmp.html',
			//controller: 'pressCtrl'
		})
		.when('/store', {
			templateUrl: 'js/templates/storeTmp.html',
			//controller: 'storeCtrl'
		})
		.otherwise('/home')
})