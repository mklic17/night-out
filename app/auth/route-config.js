(function() {
  'use strict';

  angular
    .module('authModule')
    .config(configFunction);

  configFunction.$inject = ['$stateProvider'];
  function configFunction($stateProvider){
    $stateProvider
      .state('login', {
        url: '/login',
        templateUrl: 'auth/login.html',
        controller: 'AuthController',
        controllerAs: 'vm',
      })
      .state('register', {
        url: '/register',
        templateUrl: 'auth/register.html',
        controller: 'AuthController',
        controllerAs: 'vm',
      });
  }
})();
