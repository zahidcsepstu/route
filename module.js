(function () {
  "use strict"
  var app = angular.module("testRoute", ["ngRoute", "ngMaterial"]);

  app.config(function ($routeProvider) {
    $routeProvider
      .when("/new", {
        templateUrl: 'new.html'
      })
  });
})();
