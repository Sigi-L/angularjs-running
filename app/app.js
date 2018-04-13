var app = angular.module('runApp', ['ngRoute']);

app.config(function ($routeProvider) {
  $routeProvider
    .when("/", {
      templateUrl: "app/home/home.html",
      controller: 'homeCtrl'
    })
    .when("/login", {
      templateUrl: "app/login/login.html",
      controller: 'loginCtrl'
    })
    .when("/rungroup", {
      templateUrl: "app/rungroup/runGroup.html",
      controller: 'runGroupCtrl'
    })
    .when("/home", {
      templateUrl: "app/home/home.html",
      controller: 'homeCtrl'
    })
    .when('/about', {
      templateUrl: "app/about/about.html"
    })
    .when('/search', {
      templateUrl: "app/search/search.html",
      controller: 'searchCtrl'
    })
    .otherwise({
      redirectTo: "/"
    })
});