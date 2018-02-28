// Interpolation : creating a string by combining strings and placeholders

var app = angular.module('myApp', []);

app.controller('MainCtrl', ["$scope", "$timeout", function($scope, $timeout) { 
 //console.log($scope); 
 $scope.name = ' Ashish Goyal'; // $scope ties variables and methods to the view
 $timeout(function(){
   $scope.name = 'Everybody';
 }, 3000);
  }]);


/* HTML code for above js code

  <body ng-controller="MainCtrl">
    <p>Hello! {{name + '. How are you today?'}}</p> <!-- Everything inside these mustaches (curly braces) gets interpolated  -->
  </body>

*/
