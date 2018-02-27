var app = angular.module('myApp', []);

app.controller('MainCtrl', function($scope) {  // Dependency Injection is happening here
  console.log($scope); // prints {$$childTail: null, $$childHead: null, $$nextSibling: null, $$watchers: null, $$listeners: {…},…}
  
  // below we are adding functions and variables to $scope.
  $scope.fname = 'Ashish';
  $scope.age = 25;
  $scope.hisName = function(){
    return 'Ashish Goyal';
  }
  $scope.hisName(); // calling the function
    
});
