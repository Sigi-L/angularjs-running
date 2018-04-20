app.controller("homeCtrl", function ($scope, $http, $log, userService, groupService) {

  userService.load().then(function () {
    $scope.users = userService.users;
  })

  groupService.load().then(function () {
    $scope.groups = groupService.groups;
    $scope.types = groupService.types;
  })

});