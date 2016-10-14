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
      controller: NavController,
      controllerAs: 'vm',
      bindToController: true,

    };

    NavController.$inject = ['authFactory' ,'$state'];
    function NavController(authFactory, $state){
      var vm = this;
      vm.logout = logout;
      vm.isLoggedIn = authFactory.isLoggedIn;


      function logout(){
        authFactory.logout();
        $state.go('home');
      }

    }
  }
})();
