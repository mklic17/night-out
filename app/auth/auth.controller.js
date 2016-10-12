(function() {
    'use strict';

    angular
        .module('authModule')
        .controller('AuthController', AuthController);

    AuthController.$inject = ['$state', 'authFactory'];

    function AuthController($state, authFactory) {
        var vm = this;

        vm.register = register;
        vm.login = login;
        vm.logout = logout;
        // isLoggedIn = authFactory.isLoggedIn;

        vm.user = {
            email: '',
            password: ''
        }

        function register(user) {
            return authFactory.register(user).then(function() {
                    vm.login(user);
                })
                .catch(function(error) {
                    console.log(error);
                });
        }

        function login(user) {
            return authFactory.login(user)
                .then(function(user) {
                    $state.go('activity');
                })
                .catch(function(error) {
                    console.log(error);
                });
        }

        function logout() {
            authFactory.logout();
            $state.go('home');
        }

    }

})();
