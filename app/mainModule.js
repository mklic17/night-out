(function() {
  var app = angular.module('mainModule', [
    'ui.router',
    'homeModule',
    'layoutModule',
    
  ])
  .config(configFunction)


 configFunction.$inject = ['$urlRouterProvider'];

 function configFunction($urlRouterProvider) {
   $urlRouterProvider.otherwise('/');
 }

})();
