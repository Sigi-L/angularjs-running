app.factory('runService', function ($log, $http, $q) {
  var users = [];
  var groups = [];


  users = [
    new User("sigi@abc.com", 1234, "Sigi"),
    new User("Yaron@abc.com", 1234, "Yaron")
  ];



  var group1 = new Groupf("Group 1", "Center", "Tel Aviv", "Adult", "Running", "Yaron");
  var group2 = new Groupf("Group 2", "Center", "Ramat Gan", "Adult", "Walking", "Dan");
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

  function User(plainUser) {
    this.uemail = plainUser.uemail;
    this.upassword = plainUser.upassword;
    this.uname = plainUser.uname;
    //  this.userGroups = [];
  }

  function Groupf(gname, glocation, gcity, gages, gtype, gtrainer) {
    this.gname = gname;
    this.glocation = glocation;
    this.gcity = gcity;
    this.gages = gages;
    this.gtype = gtype;
    this.gtrainer = gtrainer;
    // this.userGroups = [];
  }

  function Group(plainGroup) {
    this.gname = plainGroup.gname;
    this.glocation = plainGroup.glocation;
    this.gcity = plainGroup.gcity;
    this.gages = plainGroup.gages;
    this.gtype = plainGroup.gtype;
    this.gtrainer = plainGroup.gtrainer;
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
    types: types
  }

})