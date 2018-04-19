app.factory('groupService', function ($log, $http, $q, userService) {
  var groups = [];

  function Group(group) {
    this.gid = group.gid;
    this.gcreatordId = group.gcreatordId;
    this.gname = group.gname;
    this.glocation = group.glocation;
    this.gcity = group.gcity;
    this.gages = group.gages;
    this.gtype = group.gtype;
    this.gtrainer = group.gtrainer;
    this.gdesc = group.gdesc;
    // this.userGroups = [];
  }

  var types = [{
    id: 0,
    label: 'All',
    name: ''
  }, {
    id: 1,
    label: 'Running',
    name: 'Running'
  }, {
    id: 2,
    label: 'Walking',
    name: 'Walking'
  }];

  var wasGroupsLoaded = false;
  var activeUser = null;


  // userService.load().then(function () {

  //   $scope.users = userService.users;

  // })
  function load() {
    var async = $q.defer();

    // Checking if the cars was ever loaded
    if (wasGroupsLoaded) {
      // Immediatly resolving the promise since cars is already available
      async.resolve();
    } else {
      $http.get('app/data/running-groups-init-data.json').then(
        function (response) {
          for (var i = 0; i < response.data.length; i++) {
            groups.push(new Group(response.data[i]));
          }
          wasGroupsLoaded = true;
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
  function createGroup(group) {
    if (!group.gid) {
      group.gid = getGid();
      group.gcreatordId = userService.getUser().uid;
      groups.push(group);
    }
    return true;
  }


  // Open group details
  function getGid() {
    var newGroupId = parseInt(groups[groups.length - 1].gid) + 1;
    // alert("newGroupId: " + newGroupId)
    return newGroupId;
  }



  return {
    groups: groups,
    types: types,
    load: load,
    createGroup: createGroup
  }

})