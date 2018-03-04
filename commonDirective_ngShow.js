// ng-show has same behaviour as ng-if. Difference is, it doesnt remove part of DOM,
// rather adds a new class 'ng-hide' (inbuilt in AngularJS)  
// ng-hide uses css property of 'display: none !important' to hide content from page

/* HTML Code below
  <body ng-controller="MainCtrl">
    <div>
      <label> Just a textbox: </label> 
      <input type = 'text' ng-model='handle'/> <br>
      
      <div class='alert' ng-show='handle.length!== characters'>
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

