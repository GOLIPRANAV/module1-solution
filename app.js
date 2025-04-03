(function () {
    'use strict';

    angular.module('LunchCheck', [])
    .controller('LunchCheckController', ['$scope', function ($scope) {
        $scope.lunchItems = "";
        $scope.message = "";
        $scope.messageClass = "";

        $scope.checkLunch = function () {
            if (!$scope.lunchItems.trim()) {
                $scope.message = "Please enter data first";
                $scope.messageClass = "red";
                return;
            }

            let items = $scope.lunchItems.split(',')
                .map(item => item.trim())
                .filter(item => item); // Removes empty items
            
            let count = items.length;

            if (count === 0) {
                $scope.message = "Please enter data first";
                $scope.messageClass = "red";
            } else if (count <= 3) {
                $scope.message = "Enjoy!";
                $scope.messageClass = "green";
            } else {
                $scope.message = "Too much!";
                $scope.messageClass = "red";
            }
        };
    }]);
})();
