(function() {
  'use strict';

  angular
    .module('authModule')
    .config(configFunction);

  configFunction.$inject = ['$stateProvider'];
  function configFunction($stateProvider){
    $stateProvider
      .state('signIn', {
        url: '/signIn',
        templateUrl: 'auth/signIn.html',
        controller: 'AuthController',
        controllerAs: 'vm',
      })
      .state('createAccount', {
        url: '/createAccount',
        templateUrl: 'auth/createAccount.html',
        controller: 'AuthController',
        controllerAs: 'vm',
      });
  }
})();
