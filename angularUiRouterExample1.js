// Angular UI Router : Hello World example.

// css code
/*
.demoCss {
  color: red; 
  font-weight: bold;
  }

// html code
  <body>
  
  <!-- A ui-sref is a directive, and behaves similar to an html href. 
  Instead of referencing a url like an href, it references a state. 
  The ui-sref directive automatically builds a href attribute 
  for you (<a href=...></a>) based on your state’s url.  -->
  
    <a ui-sref="hello" ui-sref-active="demoCss"> Page1</a>
    <a ui-sref="about" ui-sref-active="demoCss"> Page2</a>
    
    <!-- The <ui-view> tag is a UI-Router viewport. When a state is activated, 
    the state’s view (the template:) will be loaded into the viewport. -->
    
    <ui-view></ui-view> 
  </body>

*/


var app = angular.module('plunker', ['ui.router']);

app.config(function($stateProvider) {
  // create a state: A state is the basic building block for UI-Router applications.
  var helloState = {
    name: 'hello',
    url: '/hello',
    //The template: string defines the state’s view. When the state is active, 
    // this view will be loaded into a viewport.
    template: '<h3>hello world!</h3>'
  }

  var aboutState = {
    name: 'about',
    url: '/about',
    template: '<h3>Its the UI-Router hello world app!</h3>'
  }
// Registering the states: Because $stateProvider is an Angular Provider, 
//you must inject it into a .config() block using AngularJS Dependency Injection.
  $stateProvider.state(helloState);
  $stateProvider.state(aboutState);
});