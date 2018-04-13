app.controller("runGroupCtrl", function ($scope, $http, $log, $location, runService) {

  $scope.users = runService.users;
  $scope.groups = runService.groups;
  $scope.types = runService.types;


  $scope.gname = "aaaaaa";
  $scope.gmanager = "Tal";
  $scope.garea = "Center";
  $scope.gcity = "Lod";
  $scope.gdesc = "Test";


  $scope.invalidGroup = false;

  $scope.createGroup = function () {
    var ret = runService.createGroup($scope.gname,
      $scope.gmanager, $scope.garea,
      $scope.gcity, $scope.gdesc);
    if (ret) {
      $location.path("/search");
    }
    else {
      $location.path("/about");
    }

  }



});