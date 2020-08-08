var app = angular.module("testRoute");
app.controller("newDirectiveCtrl", newDirectiveCtrl);
function newDirectiveCtrl($scope) {
    $scope.view = "Directive View";
}