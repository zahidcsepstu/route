(function(){
  "use strict"
    const app = angular.module("testRoute");
    app.controller("newDirectiveCtrl", newDirectiveCtrl);
  function newDirectiveCtrl($scope){
    $scope.view = "asdadas";
  }
  app.directive("newDirective",newDirective);
  function newDirective(){
    debugger
    return {
     controller: "newDirectiveCtrl",
     templateUrl: 'directive.html'
   };
  }

})();
