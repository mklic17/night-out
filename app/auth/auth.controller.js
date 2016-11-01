(function() {
    'use strict';

    angular
        .module('authModule')
        .controller('AuthController', AuthController);

    AuthController.$inject = ['$state', 'authFactory'];

    function AuthController($state, authFactory) {
        var vm = this;

        vm.createAccount = createAccount;
        vm.error = null
        vm.login = login;
        vm.logout = logout;

        vm.user = {
            email: '',
            password: ''
        }

        function createAccount(user) {
            return authFactory.createAccount(user).then(function() {
              vm.login(user);
            })
            .catch(function(error) {
                vm.error = error;
            });
        }

        function login(user) {
            return authFactory.login(user).then(function(user) {
                $state.go('activity');
            })
            .catch(function(error) {
                vm.error = error;
            });
        }

        function logout() {
            authFactory.logout();
            $state.go('home');
        }

    }

})();
