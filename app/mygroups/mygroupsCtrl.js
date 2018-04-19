app.controller("mygroupsCtrl", function ($scope, $http, $log, $location, userService, groupService) {

  // $scope.users = userService.users;
  // $scope.groups = groupService.groups;
  // $scope.types = groupService.types;

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
  })

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


});