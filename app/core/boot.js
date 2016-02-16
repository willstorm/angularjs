angular
    .module('app')
    .config(function($routeProvider){
        $routeProvider.when('/', {
            templateUrl : 'app/core/views/index.html'
        });
    });


angular
    .module('app')
    .run(function(menu){
        menu.add('Login', '#/login', 1);
        menu.add('Home', '#/home', 0);
    });