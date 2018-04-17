app.factory('runService', function ($log, $http, $q) {
  var users = [];
  var groups = [];


  users = [
    new User("sigi@abc.com", 1234, "Sigi"),
    new User("Yaron@abc.com", 1234, "Yaron")
  ];

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





  // function createGroup(gname, gmanager, garea, gcity, gdesc, gtype, gage) {

  //   // function addTask(text) {
  //   var newGroup = new Groupf(gname, garea, gcity, gage, gtype, gmanager, gdesc);

  //   // TODO validations
  //   if (!gname || !garea || !gcity || !gage ||
  //      !gtype || !gmanager || !gdesc) {
  //     return false;
  //   } else {
  //     groups.push(newGroup);
  //     return true;
  //   }
  // }

  function User(plainUser) {
    this.uemail = plainUser.uemail;
    this.upassword = plainUser.upassword;
    this.uname = plainUser.uname;
    //  this.userGroups = [];
  }

  function createGroup(group) {
    if (!group.gid) {
      group.gid = getGid();
      groups.push(group);
    }
    return true;

  }


  // Open group details
  function getGid() {
    var newGroupId = groups.length + 1;
    return newGroupId;
  }


  function User(plainUser) {
    this.uemail = plainUser.uemail;
    this.upassword = plainUser.upassword;
    this.uname = plainUser.uname;
    //  this.userGroups = [];
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


  // var task1 = new Task(true, "task1");
  // var task2 = new Task(false, "task2");
  // tasks = [task1, task2];

  // function TaskObj(task) {
  //   return new Task(task.checked, task.text);
  // }

  // function addTask(text) {
  //   var task = new Task(true, text);
  //   tasks.push(task);
  // }

  return {
    users: users,
    groups: groups,
    types: types,
    createGroup: createGroup
  }

})