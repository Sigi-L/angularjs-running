app.controller("homeCtrl", function ($scope, $http, $log, userService, groupService) {

  $scope.users = userService.users;
  $scope.groups = groupService.groups;
  $scope.types = groupService.types;


});