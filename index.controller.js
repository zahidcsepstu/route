var app = angular.module("testRoute");
app.controller("testCtrl", testCtrl);
function testCtrl($scope, crudService, $mdDialog) {
    var vm = this
    $scope.user = {

    }
    $scope.name = "zahid";
    $scope.view = "here"
    $scope.columnArray = ["SN", "Name", "Email", "Phone", "Address"];
    $scope.columnArrayDelete = ["SN", "Name", "Email", "Phone", "Address", "Action"];

    vm.array = [
        {
            "name": "ashik",
            "email": "ashik@gmail.com",
            "phone": "01878072803",
            "address": "Bhola"
        },
        {
            "name": "zahid",
            "email": "zahid@gmail.com",
            "phone": "01834520200",
            "address": "Dhaka"
        },
        {
            "name": "farhad",
            "email": "farhad@gmail.com",
            "phone": "01780732379",
            "address": "Dhaka"
        }
    ]
    $scope.widthSize = widthSize;
    function widthSize(length) {
        return crudService.widthSize(length);

    }

    $scope.insertData = insertData
    function insertData() {
        $scope.array.unshift($scope.user)
        $scope.user = {
        }
        alert("User Added Successfully");
    }

    $scope.delUser = delUser
    function delUser(index) {
        $scope.array.splice(index, 1);
    }
    $scope.showDialog = function (index) {
        $mdDialog.show({
            controller: "DialogController",

            templateUrl: 'update.dialog.html',
            locals: {
                array: $scope.array,
                ind: index
            },
            parent: angular.element(document.body),
            clickOutsideToClose: true,
        })
            .then(function (answer) {
                if (answer) {
                    $scope.array = answer;
                }

            });
    };


}