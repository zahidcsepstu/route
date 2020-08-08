var app = angular.module("testRoute");
app.controller("testCtrl", testCtrl);
function testCtrl($scope) {
    $scope.name = "zahid";
    $scope.view = "here"
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