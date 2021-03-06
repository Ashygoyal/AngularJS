
var app = angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider){
  $routeProvider
    .when('/',{
    templateUrl: 'main.html',
    controller: 'MainCtrl'
  })

  .when('/second',{
    templateUrl: 'second.html',
    controller: 'SecondController'
  })

  // :num is for pattern matching, it'll check for a number in url after '.../second/' 
  // it can be anything->  /second/:num/something/:id
  
  .when('/second/:num',{
    templateUrl: 'second.html',
    controller: 'SecondController'
  })
  
  // below is the default route when none of the others get matched
  .otherwise({
    template : "<h1>Nothing</h1><p>Nothing has been selected</p>"
  })  
  
});

app.controller('MainCtrl', ["$scope", function($scope) { 
  $scope.name = 'Main Controller';
}
]);


app.controller('SecondController', ["$scope", "$routeParams", function($scope, $routeParams) { 
  $scope.name = 'Second Controller';
  $scope.num = $routeParams.num || 1 ;
}
]);


  

