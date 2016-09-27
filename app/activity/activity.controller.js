(function() {
  'use strict';

  angular
    .module('activityModule')
    .controller('ActivityController', ActivityController);

    ActivityController.$inject = ['activityFactory'];
    function ActivityController(activityFactory) {
      var vm = this;

      vm.addSubmission = addSubmission;
      vm.newTask = new activityFactory.Task();


      function addSubmission() {
        vm.tasks.$add(vm.newTask);
        vm.newTask = new activityFactory.Task();
      }

    }
  })();
