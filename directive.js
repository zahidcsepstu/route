(function () {
  "use strict"
  const app = angular.module("testRoute");
  app.controller("newDirectiveCtrl", newDirectiveCtrl);
  function newDirectiveCtrl($scope) {
    $scope.view = "zAHID";
  }
  app.directive("newDirective", newDirective);
  function newDirective() {
    return {
      controller: "newDirectiveCtrl",
      templateUrl: 'directive.html'
    };
  }

})();
