(function() {
  angular.module('mainModule', [
    'ui.router',
    'firebase',
    'homeModule',
    'activityModule',
    'authModule',
    'layoutModule',
    'firebaseModule',
    'discoverModule',

  ])
  .config(configFunction);

  configFunction.$inject = ['$urlRouterProvider']
  function configFunction($urlRouterProvider){
    $urlRouterProvider.otherwise("/");
  }

})();
