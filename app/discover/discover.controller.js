(function() {
  'use strict';

  angular
    .module('discoverModule')
    .controller('DiscoverController', DiscoverController);

    DiscoverController.$inject = ['discoverFactory'];
    function DiscoverController(discoverFactory) {

      var vm = this;
      // vm.getTask = discoverFactory.getTasks
      vm.submitFunction = submitFunction;
      vm.SearchCont = new discoverFactory.SearchCont();

      function submitFunction() {
        // window.location.reload()
        var getTask = discoverFactory.getTasks(vm.SearchCont);
        // console.log(getTask);

      }

    }
})();
