// ng-cloak : prevents the application from flickering at page load
// it prevents the document from showing unfinished AngularJS code until, 
// AngularJs has stopped working on it

// For an exhaustive list of AngularJS directrives,
// visit this URL: https://docs.angularjs.org/api


/* HTML Code below
  <body ng-controller="MainCtrl">
    <div ng-cloak> {{name}} </div>
  </body>
*/

var app = angular.module('myApp', []);

app.controller('MainCtrl', ["$scope", function($scope) { 

  $scope.name = 'Jane Doe'

}
]);

