(function() {
  'use strict';

  angular
    .module('authModule')
    .directive('xtAuthorForm', xtAuthorForm);

    function xtAuthorForm() {
      return {
        templateUrl: 'auth/directive/authorForm.html',
        restrict: 'E',
        controllerAs: 'vm',
        controller: AuthorFormController,
        bindToController: true,
        scope: {
          submitFunction: '&',
          formName: '@',
          error: '=',
          message: '@',
          page: '@'
        },
      };
    }

    AuthorFormController.$inject = ['authFactory'];
    function AuthorFormController(authFactory) {
      var vm = this

      vm.user = {
        email: '',
        password: ''
      }
    }

})();
