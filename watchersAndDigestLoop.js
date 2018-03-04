// HTML code
/*  <body ng-controller="MainCtrl">
    <div>
      <label> Just a textbox: </label> 
      <input type = 'text' ng-model='handle'/> <br>
      <h1> Twitter Handle is: {{lowercaseHandle() }}</h1>
      
    </div>
    
  </body>
*/



// Everytime you put a variable/ function on the scope through binding or interpolation,
//AngularJS automatically adds a watcher to the watchlist to keep track of the original value and the new value.

// The part of angular which is watching and checking for changes is inside the Digest Loop
// 

var app = angular.module('myApp', []);

app.controller('MainCtrl', ["$scope","$filter","$timeout", function($scope,$filter,$timeout) { 
  $scope.handle='';
  
  $scope.lowercaseHandle = function(){
    return $filter('lowercase')($scope.handle);
  };
  
  // setting up a watcher manually on a variable 'handle'
  $scope.$watch('handle', function(newValue, oldValue){
    console.log('Value is CHANGED');
    console.log('New Value is: '+ newValue);
    console.log('Old Value is: ' + oldValue);
  });
  
  // Below Code function is outside Angular's context - wont be detected by watcher
  // It's a normal Javascript function
  /* 
  setTimeout(function(){
    $scope.handle='newTwitterHandle';
    console.log('Scope Changed.');
  }, 3000);
  */
  
  // To get the watcher to watch the code which is outside Angular's context,
  // use $apply to explicitly call the watcher on that code.
  /*
  setTimeout(function(){
    $scope.$apply(function(){
      $scope.handle='myTwitterHandle';
      console.log('Scope Changed Again');
    });
  }, 5000);
  */
  
  // We use $apply, when we are calling setTimeout (normal Javascript code),
  // or some third party library like jQuery.
  
  // However, AngularJS does provide some inbuilt services to ease things,
  // e.g. $timeout service, which is similar to setTimeout function
  // so now, we neednt call $apply explicitly
  
    $timeout(function(){
   
      $scope.handle='myTwitterHandle';
      console.log('Scope Changed Again');
  }, 5000);
  
}
]);

