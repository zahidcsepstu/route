(function () {
  "use strict"
  var app = angular.module("testRoute", ["ngRoute", "ngMaterial"]);

  app.config(function ($routeProvider) {
    $routeProvider
      .when("/list", {
        templateUrl: 'list.html'
      })
      .when("/insert", {
        templateUrl: 'insert.html'
      })
      .when("/update", {
        templateUrl: 'update.html'
      })
      .when("/delete", {
        templateUrl: 'delete.html'
      })
  });
})();
