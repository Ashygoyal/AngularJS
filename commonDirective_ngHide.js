// ng-hide has exactly opposite behaviour as ng-show. 
// It'll hide the content from page as long as the condition is true

/* HTML Code below
  <body ng-controller="MainCtrl">
    <div>
      <label> Just a textbox: </label> 
      <input type = 'text' ng-model='handle'/> <br>
      
      <div class='alert' ng-hide='handle.length !== characters'>
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

