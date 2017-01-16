var app = angular.module('mealApp', ['ngMessages', 'ngRoute', 'ngAnimate']);

app.config(['$routeProvider', function($routeProvider) {
	$routeProvider
	.when('/', {
		templateUrl: 'index.html'
	})
	.when('/meal-details', {
		templateUrl: 'views/meal-details.html',
		controller: 'MealCtrl'
	})
	.otherwise({
		redirectTo: '/'
	});
}]);