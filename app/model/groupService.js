app.factory('groupService', function ($log, $http, $q) {
  var groups = [];

  function Groupf(gid, gname, glocation, gcity, gages, gtype, gtrainer, gdesc) {
    this.gid = gid;
    this.gname = gname;
    this.glocation = glocation;
    this.gcity = gcity;
    this.gages = gages;
    this.gtype = gtype;
    this.gtrainer = gtrainer;
    this.gdesc = gdesc;
    // this.userGroups = [];
  }

  var group1 = new Groupf("1", "Group 1", "Center", "Tel Aviv", "Adult",
    "Running", "Yaron", "Desc 1");
  var group2 = new Groupf("2", "Group 2", "Center", "Ramat Gan", "Adult",
    "Walking", "Dan", "Desc 2");
  groups = [group1, group2];

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


  function createGroup(group) {
    if (!group.gid) {
      group.gid = getGid();
      groups.push(group);
    }
    return true;
  }


  // Open group details
  function getGid() {
    var newGroupId = parseInt(groups[groups.length-1].gid)+ 1;
    alert ("newGroupId: " +newGroupId)
    return newGroupId;
  }

  function Group(group) {
    this.gid = group.gid;
    this.gname = group.gname;
    this.glocation = group.glocation;
    this.gcity = group.gcity;
    this.gages = grozup.gages;
    this.gtype = group.gtype;
    this.gtrainer = group.gtrainer;
    this.gdesc = group.gdesc;
    // this.userGroups = [];
  }



  return {
    groups: groups,
    types: types,
    createGroup: createGroup
  }

})