(function() {
  'use strict';

  angular
    .module('activityModule')
    .directive('xtForm', xtForm)

    function xtForm() {
        return {
          templateUrl: 'activity/directive/form.html',
          restrict: 'E',
          controller: 'ActivityController',
          controllerAs: 'vm',
        }
    }

})();
