
(function() {
  'use strict';

  angular
    .module('activityModule')
    .controller('ActivityController', ActivityController);

    ActivityController.$inject = ['activityFactory', '$state'];
    function ActivityController(activityFactory, $state) {
      var vm = this;

      vm.getTime = activityFactory.getTime;
      vm.addOne = activityFactory.addOne;
      vm.addSubmission = addSubmission;
      vm.tasks = activityFactory.tasks;
      vm.newTask = new activityFactory.Task;
      vm.remove = remove;



      function addSubmission() {
        vm.tasks.$add(vm.newTask);
        vm.newTask = new activityFactory.Task();
        $state.go('activity');

      }

      function remove(task) {
        vm.tasks.$remove(task);
      }

    }
  })();
