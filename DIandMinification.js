var app = angular.module('myApp', []);

// If you are planning to minify your js file, use the below syntax in angularjs.
// pass an array to the controller, along with the name parameter.
// The array must contain the elements in the same order as they are being passed to the function.
// The function must always be the last element of the array

app.controller('MainCtrl', ["$scope", "$log", function($scope, $log) { 
 console.log($scope); 
  }]);

// minified version  would be as follows:
// app.controller("MainCtrl",["$scope","$log",function(a,b){console.log(a)}]);

// 'a' inside the function will always refer to the first element of array($scope in this case) and 'b' to the second ($log in this case).
// If you change the order to  .. ..[$log,$scope, function(a,b){ . ... }]);   'a' would point to $log and 'b' to $scope