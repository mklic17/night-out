(function() {
  angular.module('mainModule', [
    'ui.router',
    'homeModule',
    'layoutModule',
    'activityModule',
    'firebase',
    'firebaseModule',



  ]);
  // .config(configFunction)

 //
 // configFunction.$inject = ['$urlRouterProvider'];
 //
 // function configFunction($urlRouterProvider) {
 //   $urlRouterProvider.otherwise('/');
 // }

})();
