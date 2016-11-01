(function() {
  'use strict';

  angular
    .module('api')
    .directive('xtGoogle', xtGoogle);

    function xtGoogle(){
      return {
        templateUrl: 'api/google.html',
        restrict: 'E',
      }

    }
})();
