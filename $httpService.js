// The $http service is a core AngularJS service that facilitates 
// communication with the remote HTTP servers via the browser's XMLHttpRequest object or via JSONP.

var app = angular.module('myApp', []);

app.controller('MainCtrl', ["$scope", "$http",function($scope,$http) { 
  
  //****** Simple GET request example:
  $http({
    method: 'GET',
    url: '/someUrl'
  }).then(function successCallback(response) {
    // this callback will be called asynchronously
    // when the response is available
    }, function errorCallback(response) {
    // called asynchronously if an error occurs
    // or server returns response with an error status.
    });
  
//********* Alternate Way to write Post call
/*
var req = {
 method: 'POST',
 url: 'http://example.com',
 headers: {
   'Content-Type': undefined
 },
 data: { test: 'test' }
}

$http(req).then(function(){...}, function(){...});

*/


//******** ShortCut Methods - examples
/* 
  $http.get('/someUrl', config).then(successCallback, errorCallback);
  $http.post('/someUrl', data, config).then(successCallback, errorCallback);

*/

//**** Properties of Response object
/*

The response from the server is an object with these properties:

.config the object used to generate the request.
.data a string, or an object, carrying the response from the server.
.headers a function to use to get header information.
.status a number defining the HTTP status.
.statusText a string defining the HTTP status.
*/






}
]);

