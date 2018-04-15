app.controller("searchCtrl", function ($scope, $http, $log, runService) {

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
      $scope.openCar = function (group) {
        $location.path('/rungroup/' + $scope.groups.indexOf(group));
    }
  $scope.sortProp = "";
  $scope.changeSort = function (propName) {
    $scope.sortProp = propName;
  }


  // $scope.colors = [
  //       {name:'black', shade:'dark'},
  //       {name:'white', shade:'light', notAnOption: true},
  //       {name:'red', shade:'dark'},
  //       {name:'blue', shade:'dark', notAnOption: true},
  //       {name:'yellow', shade:'light', notAnOption: false}
  //     ];
  //     $scope.myColor = $scope.colors[2]; // red


  // // Initializing searchText so it won't be undefined before the user enters text
  // $scope.search1 = "";
  // $scope.search2 = "";

  // $scope.searchData = function (actor) {
  //     // Case insensitive search in model and brand properties

  //     var namefilter = actor.fname.toLowerCase().includes($scope.search1.toLowerCase()) ||
  //         actor.lname.toLowerCase().includes($scope.search1.toLowerCase());
  //     var datefilter = true;
  //     if ($scope.search2 !== "") {
  //         if ((actor.bDate.getMonth() + 1).toString() !== ($scope.search2)) {
  //             datefilter = false;
  //         }
  //     }
  //     return (namefilter && datefilter);
  // }
  // function User(plainUser) {
  //   this.uemail = plainUser.uemail;
  //   this.upassword = plainUser.upassword;
  //   this.uname = plainUser.uname;
  //   //  this.userGroups = [];
  // }


  // function Group(plainGroup) {
  //   this.gname = plainGroup.gname;
  //   this.glocation = plainGroup.glocation;
  //   this.ucity = plainGroup.gcity;
  //   this.uages = plainGroup.gages;
  //   this.utype = plainGroup.gtype;
  //   this.utrainer = plainGroup.gtrainer;
  //   // this.userGroups = [];
  // }


});