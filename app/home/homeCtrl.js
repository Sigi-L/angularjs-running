app.controller("homeCtrl", function ($scope, $http, $log, $location, userService, groupService) {

  if (!userService.isLoggedIn()) {
    $location.path("/");
    return;
  }
  
  userService.load().then(function () {
    $scope.users = userService.users;
  })

  groupService.load().then(function () {
    $scope.groups = groupService.groups;
    $scope.types = groupService.types;
  })

});