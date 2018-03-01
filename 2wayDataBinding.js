// Directive:  An instruction to AngularJS to manipulate a piece of DOM
// Example of 2 way data binding

var app = angular.module('myApp', []);

app.controller('MainCtrl', ["$scope","$filter", function($scope,$filter) { 
  $scope.handle='';
  $scope.lowercaseHandle = function(){
    return $filter('lowercase')($scope.handle);
  }
  
}
]);

/* HTML code for above JS code:

<body ng-controller="MainCtrl">
    <div>
      <label> What is your twitter handle?</label>
      <input type = 'text' ng-model='handle'/>
    </div>
    <h2> https://twitter.com/{{ lowercaseHandle() }}</h2>
  </body>

*/
