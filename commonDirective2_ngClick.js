// ng-click, similar to onClick event of Javascript. 
// Similarly, there are other directives like ng-keypress, ng-change, etc.


/* HTML Code below
 <body ng-controller="MainCtrl">
    <div>
      <input type='button' value='Click Me' ng-click='alertClicked()'/>
    </div>
    
  </body>
*/

var app = angular.module('myApp', []);

app.controller('MainCtrl', ["$scope", function($scope) { 

  $scope.alertClicked= function(){
    alert('Hello John Doe');
  }

}
]);