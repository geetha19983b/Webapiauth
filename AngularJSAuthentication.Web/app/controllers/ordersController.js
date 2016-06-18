'use strict';
app.controller('ordersController', ['$scope', 'ordersService', function ($scope, ordersService) {

    $scope.orders = [];

    ordersService.getOrders().then(function (results) {

        $scope.orders = results.data;
        //alert($scope.orders);

    }, function (error) {
        //alert(error.data.message);
    });

}]);