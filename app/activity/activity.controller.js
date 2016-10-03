(function() {
  'use strict';

  angular
    .module('activityModule')
    .controller('ActivityController', ActivityController);

    ActivityController.$inject = ['activityFactory', 'firebaseFactory', '$state'];
    function ActivityController(activityFactory, firebaseFactory, $state) {
      var vm = this;
      vm.getTime = activityFactory.getTime;

      vm.addSubmission = addSubmission;
      vm.tasks = activityFactory.tasks;
      vm.newTask = new activityFactory.Task();


      function addSubmission() {
        vm.tasks.$add(vm.newTask);
        vm.newTask = new activityFactory.Task();
        $state.go('activity');

      }

    }
  })();
