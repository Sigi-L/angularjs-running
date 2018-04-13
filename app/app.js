var app = angular.module("runApp", ["ngRoute"]);

app.config(function($routeProvider) {
  $routeProvider
    .when("/", {
      templateUrl: "app/home/home.html",
      controller: 'homeCtrl'
    })
    .when("/home", {
      templateUrl: "app/home/home.html",
      controller: 'homeCtrl'
    })
    .when('/search', {
      templateUrl: "app/search/search.html",
      controller: 'searchCtrl'
    })
});