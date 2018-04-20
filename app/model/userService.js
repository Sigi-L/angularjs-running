
app.factory("userService", function ($http, $log, $q, groupService) {

    var users = [];

    function User(plainUser) {
        this.uid = plainUser.uid;
        this.uemail = plainUser.uemail;
        this.upassword = plainUser.upassword;
        this.ufname = plainUser.ufname;
        this.ulname = plainUser.ulname;
        this.umygroups = plainUser.umygroups;
        this.umyadmin = plainUser.umyadmin;
        this.username = function () {
            return this.ufname + " " + this.ulname;
        };
        this.usertitle = function () {
            return this.ufname + " " + this.ulname + " (" + this.uid + ")";
        };
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
            if (users[i].uemail === email && users[i].upassword === pwd) {
                activeUser = new User(users[i]);
                // TODO setUserDara
                // groupService.setUserDara(activeUser.uid);
                return true;
            }
        }
        return false;
    }

    function getUser() {
        return activeUser;
    }

    function getUser() {
        return activeUser;
    }
    function isLoggedIn() {
        return activeUser ? true : false;
    }

    function getUserById(uid) {
        for (var i = 0; i < users.length; i++) {
            if (users[i].uid === uid) {
                return (users[i]);
            }
        }
    }

    function logout() {
        activeUser = null;
        // groupService.mygroups.splice(0, mygroups.length);
        // groupService.myadmin.splice(0, mygroups.length);
    }

    return {
        load: load,
        users: users,
        login: login,
        getUser: getUser,
        isLoggedIn: isLoggedIn,
        getUserById: getUserById,
        logout: logout
    }
})