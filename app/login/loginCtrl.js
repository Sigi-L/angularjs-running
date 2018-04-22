
app.controller('loginCtrl', function ($scope, userService, $log, $location) {

    $scope.invalidCredentails = false;
    $scope.email = "1@1";
    $scope.pwd = "123";


    userService.load().then(function () {

        $scope.users = userService.users;

        $scope.login = function () {
            // TODO: Here you should disable the login button until there is a response from the service
            if (userService.login($scope.email, $scope.pwd)) {

                $location.path("/search");
            } else {
                // TODO: Missing hadleing of next try
                $scope.invalidCredentails = true;
            }
        }

    })







});