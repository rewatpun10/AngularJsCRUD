 var app = angular.module('app',[
	'ngAnimate',
	'ngCookies',
	'ngResource',
	'ngRoute',
	'ngSanitize',
	'ngTouch'
]);

app.config(function($routeProvider){
	$routeProvider
	//homepage
	.when('/homepage',{
		templateUrl : 'pages/homepage.html',
		controller : 'Homepage'
	})

	// aboutpage
	.when('/about',{
	templateUrl : 'pages/about.html',
	controller : 'About'
	})

	//datepage
	.when('/date',{
	templateUrl : 'pages/date.html',
	controller : 'Date'
	})

	.when('/first',{
		templateUrl : 'pages/first.html',
			controller : 'First'
	})
	.when('/second',{
			templateUrl : 'pages/second.html',
			controller : 'Second'
	})
		.when('/successLogin',{
			templateUrl : 'pages/successLogin.html',
			controller : 'SuccessLogin'
		})
		.when('/logout',{
			templateUrl : 'index.html',
			controller : 'LogoutController'
		})
		.when('/persondetails',{
			templateUrl : 'pages/personDetails.html',
			controller : 'ListController'
		})
		.when('/login',{
		templateUrl : 'pages/index.html',
			controller : 'LoginController'

	});

});
