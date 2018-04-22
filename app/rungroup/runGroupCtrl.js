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
  // $scope.newGname = "New Group";
  // $scope.newGtrainer = "new trainer";
  // $scope.newGlocation = "new location";
  // $scope.newGcity = "new city";
  // $scope.newGtype = "Running";
  // $scope.newGages = "Children";
  // $scope.newGdesc = "new desc";

  $scope.invalidGroup = false;

  var indexToDisplay = -1;
  if ($routeParams.index) {
    indexToDisplay = parseInt($routeParams.index);
  }

  if (indexToDisplay > -1) {
    $scope.group = groupService.groups[indexToDisplay];
  }

  // $scope.newGage = $scope.newGage ? $scope.newGage : "Children";
  // $scope.newGtype = $scope.newGtype ? $scope.newGtype : "Running";
  $scope.saveGroup = function () {
    // $scope.group.gname = "New";
    // $scope.group.gtrainer = "New";
    // $scope.group.glocation = "New";
    // $scope.group.gcity = "New";
    // $scope.group.gtype = "Running";
    // $scope.group.gage = "Children";
    // $scope.group.gdesc = "New";
    if (!$scope.group.gtype) {
      $scope.group.gtype = "Running";
    }

    if (!$scope.group.gages) {
      $scope.group.gages = "Adult";
    }
    var ret = groupService.saveGroup($scope.group, userService.getUser());
    // $scope.group.gtype = $scope.newGtype;
    // $scope.group.gage = $scope.newGage;
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
  $scope.showUserAction = groupService.isRegister($scope.group, userService.getUser());

  $scope.registerGroup = function () {
    // alert("TODO registerGroup");
    var ret = groupService.registerGroup($scope.group, userService.getUser());
    if (ret) {
      // TODO success
      $location.path("/mygroups");
    }
    else {
      // TODO error
      alert("Error saveGroup");
      $location.path("/about");
    }
  }

  $scope.unregisterGroup = function () {
    // alert("TODO unregisterGroup");
    var ret = groupService.unregisterGroup($scope.group, userService.getUser());
    if (ret) {
      // TODO success
      $location.path("/mygroups");
    }
    else {
      // TODO error
      alert("Error saveGroup");
      $location.path("/about");
    }
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

  $scope.isAdminOrNew = function (group) {
    if (!group || (group && group.gcreatordId === currUser.uid) || (group && !group.gid)) {
      return true;
    } else {
      return false;
    }
  }


});