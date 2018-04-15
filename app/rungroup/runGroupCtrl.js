app.controller("runGroupCtrl", function ($scope, $http, $log, $location, runService) {

  $scope.users = runService.users;
  $scope.groups = runService.groups;
  $scope.types = runService.types;


  $scope.gname = "aaaaaa";
  $scope.gmanager = "Tal";
  $scope.garea = "Center";
  $scope.gcity = "Lod";
  $scope.gdesc = "Test";
  $scope.gtype = "running";
  $scope.gage = "adult";

  $scope.invalidGroup = false;

  $scope.createGroup = function () {


    var ret = runService.createGroup($scope.gname,
      $scope.gmanager, $scope.garea,
      $scope.gcity, $scope.gdesc,  $scope.gtype,  $scope.gage);
    if (ret) {
      // TODO success
      $location.path("/search");
    }
    else {
      // TODO error
      $location.path("/about");
    }

  }



});