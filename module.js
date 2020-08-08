(function () {
  "use strict"
  var app = angular.module("testRoute", ["ngRoute"]);

  app.config(function ($routeProvider) {
    $routeProvider
      .when("/new", {
        templateUrl: 'new.html'
      })
  });
})();
