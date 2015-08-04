'use strict';

/* App Module */

var phonecatApp = angular.module('phonecatApp', [
  'ngRoute',
  'phonecatAnimations',

  'phonecatControllers',
  'phonecatFilters',
  'phonecatServices'
]);

phonecatApp.provider('greeting', function () {
  var text = "Hello";
  this.setText = function(value) {
    text = value;
  };

  this.$get = function () {
    return function(name) {
      alert(text + name);
    }
  }
});

phonecatApp.config(['$routeProvider', 'greetingProvider',
  function($routeProvider, greetingProvider) {
    greetingProvider.setText("Welcome ");
    $routeProvider.
    when('/phones', {
      templateUrl: 'partials/phone-list.html',
      controller: 'PhoneListCtrl'
    }).
    when('/phones/:phoneId', {
      templateUrl: 'partials/phone-detail.html',
      controller: 'PhoneDetailCtrl'
    }).
    when('/books/:bookId', {
      templateUrl: 'partials/book.html',
      controller: 'BookController'
    }).
    otherwise({
      redirectTo: '/phones'
    });
  }]);