(function () {
  "use strict"
  var app = angular.module("testRoute");

  app.directive("newDirective", newDirective);
  function newDirective() {
    return {
      controller: "newDirectiveCtrl",
      templateUrl: "/new.directive/directive.html"
    };
  }

})();
