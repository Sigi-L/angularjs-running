
app.controller('navbarCtrl', function ($scope, userService, $location) {

    if (!userService.isLoggedIn()) {
        $location.path("/");
        return;
    }

    userService.load().then(function () {
        $scope.users = userService.users;
        $scope.usertitle = userService.getUser().usertitle();
    })

    $scope.logout = function () {
        userService.logout();
        $location.path('/');
    }

})