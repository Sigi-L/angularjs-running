
app.factory("userService", function ($http, $log, $q) {

    var users = [];

    function User(plainUser) {
        this.uid = plainUser.uid;
        this.email = plainUser.email;
        this.password = plainUser.password;
        this.fname = plainUser.fname;
        this.lname = plainUser.lname;
        this.data = plainUser.data;
    }

    var wasUsersLoaded = false;
    var activeUser = null;

    function load() {
        var async = $q.defer();

        // Checking if the cars was ever loaded
        if (wasUsersLoaded) {
            // Immediatly resolving the promise since cars is already available
            async.resolve();
        } else {
            $http.get('app/data/users.json').then(
                function (response) {
                    for (var i = 0; i < response.data.length; i++) {
                        users.push(new User(response.data[i]));
                    }
                    wasUsersLoaded = true;
                    async.resolve();
                    // Testing
                    //alert(users[1].lname); 
                }, function (response) {
                    $log.error("error in getting user json: " + JSON.stringify(response));
                    async.reject();
                });
        }
        return async.promise;

    }


    // This function will update the active user property with the logged in user
    // Will return true in case of successfull login. otherwise return false
    function login(email, pwd) {
        for (var i = 0; i < users.length; i++) {
            if (users[i].email === email && users[i].password === pwd) {
                activeUser = new User(users[i]);
                return true;
            }
        }
        return false;
    }

    function getUser() {
        return activeUser;
    }

    function isLoggedIn() {
        return activeUser ? true : false;
    }

    function logout() {
        activeUser = null;
    }

    return {
        load: load,
        users: users,
        login: login,
        getUser: getUser,
        isLoggedIn: isLoggedIn,
        logout: logout
    }
})