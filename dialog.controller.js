var app = angular.module("testRoute");
app.controller("DialogController", DialogController);

function DialogController($scope, $mdDialog, ind, array) {
    debugger
    $scope.index = ind;
    $scope.userList = angular.copy(array);
    $scope.user = $scope.userList[ind]

    $scope.save = function () {
        $scope.userList[ind] = $scope.user;
        $mdDialog.hide($scope.userList);
    };
    $scope.discard = function () {
        $mdDialog.cancel();
    };
}