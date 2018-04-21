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


  var currUser = userService.getUser();

  $scope.invalidGroup = false;

  var indexToDisplay = -1;
  if ($routeParams.index) {
    indexToDisplay = parseInt($routeParams.index);
  }

  if (indexToDisplay > -1) {
    $scope.group = groupService.groups[indexToDisplay];
  }

  $scope.saveGroup = function () {
    var ret = groupService.saveGroup($scope.group, userService.getUser());
    if (ret) {
      // TODO success
      $location.path("/search");
    }
    else {
      // TODO error
      alert("Error saveGroup");
      $location.path("/about");
    }
  }
  $scope.registerGroup = function () {
    alert("TODO unregisterGroup")
      ;
  }
  $scope.unregisterGroup = function () {
    alert("TODO unregisterGroup")
  }

  // Open group details
  $scope.openGroup = function (group) {
    $location.path('/rungroup/' + $scope.groups.indexOf(group));
  }

  $scope.isAdmin = function (group) {
    if (group && group.gcreatordId === currUser.uid) {
      return true;
    } else {
      return false;
    }
  }

  $scope.isAdminOrNew = function (group) {
    if (!group || (group && group.gcreatordId === currUser.uid) || (group && !group.gid)) {
      return true;
    } else {
      return false;
    }
  }



});