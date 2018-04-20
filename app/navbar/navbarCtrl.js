
app.controller('navbarCtrl', function ($scope, userService, $location) {


    userService.load().then(function () {
        $scope.users = userService.users;
        $scope.usertitle = userService.getUser().usertitle();
    })


    $scope.logout = function () {
        $scope.mygroups.splice(0, mygroups.length);
        $scope.myadmin.splice(0, mygroups.length);
        userService.logout();
        $location.path('/');
    }


})