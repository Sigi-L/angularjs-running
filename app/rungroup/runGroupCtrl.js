app.controller("runGroupCtrl", function ($scope, $http, $log, $location, $routeParams, $sce, userService, groupService) {

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
    if (!$scope.group.gtype) {
      $scope.group.gtype = "Running";
    }

    if (!$scope.group.gages) {
      $scope.group.gages = "Adult";
    }


    // Test data
    // if (currUser.uid === 200) {
    //   if (!$scope.group.gname) {
    //     $scope.group.gname = "Default name";
    //   }
    //   if (!$scope.group.gtrainer) {
    //     $scope.group.gtrainer = "Default trainer";
    //   }
    //   if (!$scope.group.glocation) {
    //     $scope.group.glocation = "Namir 100";
    //   }
    //   if (!$scope.group.gcity) {
    //     $scope.group.gcity = "Tel Aviv";
    //   }
    //   if (!$scope.group.gdesc) {
    //     $scope.group.gdesc = "Default gdesc";
    //   }
    // }
    // $scope.group.gname = "New";
    // $scope.group.gtrainer = "New";
    // $scope.group.glocation = "New";
    // $scope.group.gcity = "New";
    // $scope.group.gtype = "Running";
    // $scope.group.gage = "Children";
    // $scope.group.gdesc = "New";


    var ret = groupService.saveGroup($scope.group, userService.getUser());
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

  $scope.showMap = function (group) {
    if (group && (group.glocation || group.gcity)) {
      var mapSearch = group.glocation + " " + group.gcity;
      $scope.mapURL = $sce.trustAsResourceUrl("https://www.google.com/maps/embed/v1/search?key=AIzaSyBSil-hbUge7NwSpdgLL6zHWNgJfQzlHcs&q=" + mapSearch);
      return true;
    } else {
      return false;
    }
  }
});