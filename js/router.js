var portfolio = angular.module('portfolio', ['ngRoute', 'ngAnimate']);

portfolio.config(['$locationProvider', '$routeProvider',
	function($locationProvider, $routeProvider) {

		$routeProvider
		.when('/', {
			templateUrl: 'views/home.html'
		})
		.when('/projects', {
			templateUrl: 'views/projects.html'
		})
		.when('/contact', {
			templateUrl: 'views/contact.html'
		})
		.when('/skills', {
			templateUrl: 'views/skills.html'
		});

		$locationProvider.html5Mode(true);
	}
]);


portfolio.controller('PortfolioCtrl', ['$scope', 
	function($scope) {
		
	}
]);