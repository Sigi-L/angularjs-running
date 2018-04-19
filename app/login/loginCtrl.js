
app.controller('loginCtrl', function ($scope, userService, $log, $location) {

    $scope.invalidCredentails = false;


    $scope.email = "nir@nir.com";
    $scope.pwd = "123123";


    // userService.load().then(function ($scope.email, $scope.pwd) {
    //     $scope.car = carService.cars[indexToDisplay];
    // })
    $scope.login = function () {
        // TODO: Here you should disable the login button until there is a response from the service

        userService.login($scope.email, $scope.pwd).then(function (successLogin) {
            if (successLogin) {
                $location.path("/search");
            } else {
                // TODO: Missing hadleing of next try
                $scope.invalidCredentails = true;
            }
        })
    }
});