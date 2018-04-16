app.controller("homeCtrl", function ($scope, $http, $log, runService) {

  $scope.users = runService.users;
  $scope.groups = runService.groups;
  $scope.types = runService.types;


});