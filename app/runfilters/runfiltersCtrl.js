
app.controller('runfiltersCtrl', function ($scope, userService, $location) {

    if (!userService.isLoggedIn()) {
        $location.path("/");
        return;
    }

    userService.load().then(function () {
        $scope.users = userService.users;
    })

})