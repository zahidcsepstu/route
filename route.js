(function () {
  "use strict"
  var app = angular.module("testRoute", ["ngRoute"]);
  app.controller("testCtrl", testCtrl);
  function testCtrl($scope) {
    $scope.name = "zahid";
    $scope.array = [
      {
        "name": "ashik",
        "age": 25
      },
      {
        "name": "zahid",
        "age": 25
      },
      {
        "name": "farhad",
        "age": 28
      }
    ]
  }
  app.config(function ($routeProvider) {
    $routeProvider
      .when("/new", {
        templateUrl: 'new.html'
      })
    // .when("/home".{
    //   templateUrl : 'index.html'
    // })
  });


})();
