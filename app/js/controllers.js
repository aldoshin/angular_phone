'use strict';

/* Controllers */

var phonecatControllers = angular.module('phonecatControllers', []);

phonecatControllers.controller('PhoneListCtrl', ['$scope', 'Phone',
	function($scope, Phone) {
		$scope.phones = Phone.query();
		$scope.orderProp = 'age';
	}]);

phonecatControllers.controller('PhoneDetailCtrl', ['$scope', '$routeParams', 'Phone',
	function($scope, $routeParams, Phone) {
		$scope.phone = Phone.get({phoneId: $routeParams.phoneId}, function(phone) {
			$scope.mainImageUrl = phone.images[0];
		});

		$scope.setImage = function(imageUrl) {
			$scope.mainImageUrl = imageUrl;
		};

		$scope.hello = function (name) {
			alert('Hello ' + (name || 'world') + '!');
		};
	}]);


phonecatControllers.controller('MainController', ['$scope','$route','$routeParams', '$location',
	function($scope, $route, $routeParams, $location){
		$scope.$route = $route;
		$scope.$location =  $location;
		$scope.$routeParams = $routeParams;
	}]);

phonecatControllers.controller('BookController', ['$scope','$routeParams', 'greeting',
	function($scope, $routeParams, greeting) {
		$scope.name = "BookController";
		$scope.params = $routeParams;
		$scope.onClick = function(bookId) {
			greeting(bookId);
		};
	}]);