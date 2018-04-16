app.controller("searchCtrl", function ($scope, $http, $log, $location, runService) {

  $scope.users = runService.users;
  $scope.groups = runService.groups;
  $scope.types = runService.types;

  // Initializing searchText so it won't be undefined before the user enters text
  $scope.searchCity = "";
  $scope.searchLocation = "";
  $scope.selectedType = ""; // $scope.types[0];

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