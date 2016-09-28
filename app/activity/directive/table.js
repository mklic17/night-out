(function() {
  'use strict';

  angular
    .module('activityModule')
    .directive('xtTable', xtTable)

    function xtTable() {
        return {
          templateUrl: 'activity/directive/table.html',
          restrict: 'E',
          controller: 'ActivityController',
          controllerAs: 'vm',
        }
    }

})();
