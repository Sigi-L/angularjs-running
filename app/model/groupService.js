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
    this.gmembers = group.gmembers;

    // this.creatorName = this.getCreatorName();
    this.getCreatorName = function () {
      return userService.getUserById(this.gcreatordId).username();
    };
    this.membersData = function () {
      var mData = [];
      if (this.gmembers) {
        for (var i = 0; i < this.gmembers.length; i++) {
          var member = userService.getUserById(this.gmembers[i].toString());
          mData.push(member.usertitle());
        }
      }
      return mData.toString();
    };
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
  function saveGroup(group, user) {
    if (group && !group.gid) {
      group.gid = getGid();
      group.gcreatordId = user.uid;
      group.gmembers = [];
      user.umyadmin.push(group.gid);
      groups.push(group);
    }
    return true;
  }

  function isRegister(group, user) {
    var gmembersIndex = group ? group.gmembers.indexOf(parseInt(user.uid)) : -1;
    if (gmembersIndex > -1) {
      return true;
    } else {
      return false;
    }
  }


  function registerGroup(group, user) {
    var gmembersIndex = group.gmembers.indexOf(parseInt(user.uid));
    if (gmembersIndex === -1) {
      group.gmembers.push(parseInt(user.uid));
    }

    var umygroupsIndex = user.umygroups.indexOf(parseInt(group.gid));
    if (umygroupsIndex === -1) {
      user.umygroups.push(parseInt(group.gid));
    }
    return true;
  }

  function unregisterGroup(group, user) {
    var gmembersIndex = group.gmembers.indexOf(parseInt(user.uid));
    if (gmembersIndex > -1) {
      group.gmembers.splice(gmembersIndex, 1);
    }

    var umygroupsIndex = user.umygroups.indexOf(parseInt(group.gid));
    if (umygroupsIndex > -1) {
      user.umygroups.splice(umygroupsIndex, 1);
    }
    return true;
  }
  // Open group details
  function getGid() {
    var newGroupId = parseInt(groups[groups.length - 1].gid) + 1;
    // alert("newGroupId: " + newGroupId)
    return newGroupId;
  }


  function getGroupById(gid) {
    for (var i = 0; i < groups.length; i++) {
      if (groups[i].gid === gid) {
        return (groups[i]);
      }
    }
  }

  function getUserGroups(user) {
    var mygrp = [];
    for (var i = 0; i < user.umygroups.length; i++) {
      mygrp.push(getGroupById(user.umygroups[i]));

    }
    return mygrp;
  }

  function getUserAdmin(user) {
    var mdadm = [];
    for (var i = 0; i < user.umyadmin.length; i++) {
      mdadm.push(getGroupById(user.umyadmin[i]));
    }
    return mdadm;
  }

  // function setUserDara(uid) {
  //   mygroups.splice(0, mygroups.length);
  //   myadmin.splice(0, mygroups.length);
  //   for (var i = 0; i < groups.length; i++) {
  //     if (groups[i].gcreatordId === uid) {
  //       mygroups.push(new Group(groups[i]));
  //     }
  //     if (groups[i].gmembers.includes(uid)) {
  //       myadmin.push(new Group(groups[i]));
  //     }
  //   }
  // }

  return {
    groups: groups,
    types: types,
    load: load,
    saveGroup: saveGroup,
    getGroupById: getGroupById,
    getUserGroups: getUserGroups,
    getUserAdmin: getUserAdmin,
    registerGroup: registerGroup,
    unregisterGroup: unregisterGroup,
    isRegister: isRegister
  }

})