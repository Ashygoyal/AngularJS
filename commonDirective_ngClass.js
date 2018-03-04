// Using ng-class we can add CSS classes dynamically to the 'class' attribute
// based on what happens between model and view connection. ng-class takes a JSON object
// so we can add multiple comma separated CSS classes
// syntax->  {'css-class': condition}

// the html element (div in this case) might or might not have 'class' attribute already

/* HTML Code below
<body ng-controller="MainCtrl">
    <div>
      <label> Just a textbox: </label> 
      <input type = 'text' ng-model='handle'/> <br>
      
      <div class='alert' ng-class= "{'alert-warning': handle.length < characters, 'alert-danger': handle.length > characters}" ng-show='handle.length !== characters'>
      
      <!-- Below line of code doesnt have a 'class' attribute, still this works fine  -->
      <!-- <div ng-class= "{'alert-warning': handle.length < characters, 'alert-danger': handle.length > characters}" ng-show='handle.length !== characters'>  -->
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

