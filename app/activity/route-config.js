(function() {
  'use strict';

  angular
    .module('activityModule')
    .config(configFunction);

  configFunction.$inject = ['$stateProvider'];
  function configFunction($stateProvider){
    $stateProvider
      .state('activity', {
        url: '/activity',
        templateUrl: 'activity/activity.html',
        controller: 'ActivityController',
        controllerAs: 'vm',
        resolve : {
          user: resolveUser,
        },
      })
      .state('form', {
        url: '/form',
        templateUrl: 'activity/form.html', // refactor this to be a different file
        controller: 'ActivityController',
        controllerAs: 'vm',
        resolve : {
          user: resolveUser,
        },
      });
  }
  resolveUser.$inject= ['authFactory']

 function resolveUser(authFactory) {
   return authFactory.auth.$requireSignIn();
 }
})();
