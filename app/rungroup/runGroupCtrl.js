app.controller("runGroupCtrl", function ($scope, $http, $log, $location, $routeParams, userService, groupService) {

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

  $scope.invalidGroup = false;

  var indexToDisplay = -1;
  if ($routeParams.index) {
    indexToDisplay = parseInt($routeParams.index);
  }

  if (indexToDisplay > -1) {
    $scope.group = groupService.groups[indexToDisplay];
  }

  $scope.createGroup = function () {
    var ret = groupService.createGroup($scope.group, userService.getUser());
    if (ret) {
      // TODO success
      $location.path("/search");
    }
    else {
      // TODO error
      alert("Error createGroup");
      $location.path("/about");
    }
  }

  // Open group details
  $scope.openGroup = function (group) {
    $location.path('/rungroup/' + $scope.groups.indexOf(group));
  }

});