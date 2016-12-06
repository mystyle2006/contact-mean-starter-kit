angular.module('appRoutes',[]).config(['$routeProvider','$locationProvider',function($routeProvider,$locationProvider){

	$routeProvider

		.when('/',{
			templateUrl: 'views/home.html',
			controller: 'ContactController'
		});

	$locationProvider.html5Mode(true);
}]);