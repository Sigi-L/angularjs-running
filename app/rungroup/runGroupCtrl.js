app.controller("runGroupCtrl", function ($scope, $http, $log, $location, $routeParams, runService) {

  $scope.users = runService.users;
  $scope.groups = runService.groups;
  $scope.types = runService.types;


  // $scope.group.gname = "aaaaaa";
  // $scope.group.gmanager = "Tal";
  // $scope.group.garea = "Center";
  // $scope.group.gcity = "Lod";
  // $scope.group.gdesc = "Test";
  // $scope.group.gtype = "running";
  // $scope.group.gage = "adult";

  $scope.invalidGroup = false;


  var indexToDisplay = -1;
  if ($routeParams.index) {
    indexToDisplay = parseInt($routeParams.index);
  }
  // carService.load(activeUserService.getUser()).then(function () {
  // $scope.car = carService.cars[indexToDisplay];
  // })
  // alert(indexToDisplay);

  if (indexToDisplay > -1) {
    $scope.group = runService.groups[indexToDisplay];
  }

  $scope.createGroup = function () {


    var ret = runService.createGroup($scope.group);
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