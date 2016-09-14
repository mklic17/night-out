(function() {
  var app = angular.module('mainModule', [
    'ui.router',
    'homeModule'
  ])
  .config(configFunction)


 configFunction.$inject = ['$urlRouterProvider'];

 function configFunction($urlRouterProvider) {
   $urlRouterProvider.otherwise('/');
 }

})();
