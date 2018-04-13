var app = angular.module("runApp", ["ngRoute"]);

app.config(function($routeProvider) {
  $routeProvider
    .when("/", {
      templateUrl: "home.html",
      controller: 'homeCtrl'
    })
    .when("/home", {
      templateUrl: "home.html",
      controller: 'homeCtrl'
    })
    .when('/search', {
      templateUrl: "search.html",
      controller: 'searchCtrl'
    })
});