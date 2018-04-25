app.controller("searchCtrl", function ($scope, $http, $log, $location, userService, groupService) {

  if (!userService.isLoggedIn()) {
    $location.path("/");
    return;
  }

  // Initializing
  $scope.searchCity = "";
  $scope.searchLocation = "";
  $scope.selectedType = "";
  $scope.sortProp = "";

  userService.load().then(function () {
    $scope.users = userService.users;
  })

  groupService.load().then(function () {
    $scope.groups = groupService.groups;
    $scope.types = groupService.types;
  })

  $scope.filterData = function (group) {
    if ((!$scope.selectedType || group.gtype.toLowerCase().includes($scope.selectedType.name.toLowerCase())) &&
      (!$scope.searchCity || group.gcity.toLowerCase().includes($scope.searchCity.toLowerCase())) &&
      (!$scope.searchLocation || group.glocation.toLowerCase().includes($scope.searchLocation.toLowerCase()))) {
      return true;
    } else {
      return false;
    }
  }

  $scope.openGroup = function (group) {
    $location.path('/rungroup/' + $scope.groups.indexOf(group));
  }

  $scope.changeSort = function (propName) {
    $scope.sortProp = propName;
  }


});