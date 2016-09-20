(function() {
  'use strict';

  angular
    .module('layoutModule')
    .directive('xtNavbar', xtNavbar);

  xtNavbar.$inject = [];
  function xtNavbar() {
    return {
      templateUrl: 'layout/navbar/navbar.directive.html',
      restrict: 'E',
    };
  }
})();
