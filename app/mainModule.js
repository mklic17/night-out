(function() {
  var app = angular.module('mainModule', [
    'ui.router'
  ]);

  function config($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');

    $stateProvider

      .state('home', {
        url: '/home',
        template: '<h1>The Night Out</h1><p>{{ message }}</p>',
        controller: function($scope) {
          $scope.message = "Welcome to The Night Out!";
        }
      });
  }

  config['$inject'] = ['$stateProvider', '$urlRouterProvider'];
  app.config(config);
})();
