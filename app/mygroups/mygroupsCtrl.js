app.controller("mygroupsCtrl", function ($scope, $http, $log, $location, userService, groupService) {

  // Initializing searchText so it won't be undefined before the user enters text
  $scope.searchCity = "";
  $scope.searchLocation = "";
  $scope.selectedType = ""; // $scope.types[0];


  userService.load().then(function () {
    $scope.users = userService.users;

  })
  groupService.load().then(function () {
    $scope.types = groupService.types;
    $scope.groups = groupService.groups;
    // $scope.mygroups = userService.getUser().umygroups;
    $scope.mygroups = groupService.getUserGroups(userService.getUser());
    $scope.myadmin = groupService.getUserAdmin(userService.getUser());

    // $scope.mygroups = getUserGroups(userService.getUser());

    // function getUserGroups (user) {
    //   // mygroups.splice(0, mygroups.length);
    //   var grp = [];
    //   var ugroups = user.umygroups;
    //   for (var i = 0; i < ugroups.length; i++) {
    //     grp.push(groupService.getGroupById(ugroups[i]));
    //   }
    //   return grp;
    // }
  })


  // function setUserDara(uid) {
  //   mygroups.splice(0, mygroups.length);
  //   myadmin.splice(0, mygroups.length);
  //   for (var i = 0; i < groups.length; i++) {
  //     if (groups[i].gcreatordId === uid) {
  //       mygroups.push(new Group(groups[i]));
  //     }
  //     if (groups[i].gmembers.includes(uid)) {
  //       myadmin.push(new Group(groups[i]));
  //     }
  //   }
  // }









  $scope.filterData = function (group) {
    if ((!$scope.selectedType || group.gtype.toLowerCase().includes($scope.selectedType.name.toLowerCase())) &&
      (!$scope.searchCity || group.gcity.toLowerCase().includes($scope.searchCity.toLowerCase()))) {
      return true;
    } else {
      return false;
    }
  }

  // Open group details
  $scope.openGroup = function (group) {
    $location.path('/rungroup/' + $scope.groups.indexOf(group));
  }

  $scope.sortProp = "";
  $scope.changeSort = function (propName) {
    $scope.sortProp = propName;
  }

  $scope.changeSort = function (propName) {
    $scope.sortProp = propName;
  }
});