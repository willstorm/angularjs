angular
    .module('app')
    .controller('NavbarController', function($scope, menu){
        $scope.items = menu.sort();
    });
