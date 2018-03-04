// ng-if removes or replaces entire pieces of DOM based on the condition
// it can be condition (as in HTML code below) or a function
// And then AngularJS puts a comment in place of the removed code, to let us know 
// from where the code has been removed

/* HTML Code below
  <body ng-controller="MainCtrl">
    <div>
      <label> Just a textbox: </label> 
      <input type = 'text' ng-model='handle'/> <br>
      
      <div class='alert' ng-if='handle.length!== characters'>
        Must be 5 characters!
      </div>
      
      <h1> Twitter Handle is: {{lowercaseHandle() }}</h1>
    </div>
    
  </body>
*/
var app = angular.module('myApp', []);

app.controller('MainCtrl', ["$scope","$filter", function($scope,$filter) { 
  $scope.handle='';
  
  $scope.lowercaseHandle = function(){
    return $filter('lowercase')($scope.handle);
  };
  
  $scope.characters = 5;
  
}
]);

