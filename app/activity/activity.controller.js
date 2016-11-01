
(function() {
  'use strict';

  angular
    .module('activityModule')
    .controller('ActivityController', ActivityController);

    // ActivityController.$inject = ['activityFactory', '$state', 'user'];
    // function ActivityController(activityFactory, $state, user) {
    ActivityController.$inject = ['activityFactory', '$state'];
    function ActivityController(activityFactory, $state) {
      var vm = this;

      // vm.tasks = activityFactory.tasksByUser(user.uid)
      vm.tasks = activityFactory.tasks
      vm.newTask = new activityFactory.Task;

    }
  })();
