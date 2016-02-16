angular
    .module('app')
    .controller('LoginController', function($scope, $location){
        this.submit = function(login) {
            return $location.path('/');
        }
    });