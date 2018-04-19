
app.controller('navbarCtrl', function ($scope, userService, $location) {

    $scope.logout = function () {
        userService.logout();
        $location.path('/');
    }


})