angular
    .module('app')
    .config(function($routeProvider){
        $routeProvider.when('/login', {
            templateUrl : 'app/user/views/login.html'
        });
    });