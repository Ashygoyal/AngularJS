// ng-repeat is like the 'for/in' loop of Javascript,
// iterates over a collection and outputs some HTML
// The Collection must be an ARRAY or an OBJECT

/* HTML Code below
  <body ng-controller="MainCtrl">
    <div>
      <h3> List 1 </h3>
      <ul>
        <li ng-repeat= 'rule in rules'> {{rule.rulename}} </li>
      </ul>
      
      <h3> List 2 </h3>
      <ul>
        <li ng-repeat= 'rul in rules2'> {{rul}} </li>
      </ul>
      
      <h3> Table 1 </h3>
      <table border="1">
        <tr ng-repeat='x in records'>
          <td>{{x.Name}}</td>
          <td>{{x.Country}}</td>
        </tr>
      </table>

      <h3> Table 2 </h3>
      <table border='1'>
        <tr ng-repeat='(x,y) in myObj'>
          <td>{{x}}</td>
          <td>{{y}}</td>
        </tr>
      </table>
      
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
  // data can come from backend, for sake of ease, we are creating an array of Javascript objects here
  $scope.rules= [
    {rulename: 'Rule 1'},
    {rulename: 'Rule 2'},
    {rulename: 'Rule 3'}
    ];
  
  $scope.rules2 = [
    "Rule4",
    "Rule5",
    "Rule6" ];
    
  $scope.records = [
    {
      "Name" : "Alfreds Futterkiste",
      "Country" : "Germany"
    },
    {
      "Name" : "Berglunds snabbköp",
      "Country" : "Sweden"
    },
    {
      "Name" : "Centro comercial Moctezuma",
      "Country" : "Mexico"
    },
    {
      "Name" : "Ernst Handel",
      "Country" : "Austria"
    }
  ] ;
  
  $scope.myObj = {
    'fname':'John',
    'lname':'Doe',
    'city':'Bengaluru'
    
  };

}
]);

