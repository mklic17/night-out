(function() {
  'use strict';

  angular
    .module('activityModule')
    .controller('ActivityController', ActivityController);

    ActivityController.$inject = ['activityFactory', 'firebaseFactory', '$state'];
    function ActivityController(activityFactory, firebaseFactory, $state) {
      var vm = this;
      vm.getTime = getTime;

      vm.addSubmission = addSubmission;
      vm.tasks = activityFactory.tasks;
      vm.newTask = new activityFactory.Task();


      function addSubmission() {
        vm.tasks.$add(vm.newTask);
        vm.newTask = new activityFactory.Task();
        $state.go('activity');

      }

      function getTime(oldTime){
        var newTime = Math.floor(Date.now() / 1000);
        var time = newTime - oldTime;

        if (time < 3600){
          return `Posted ${Math.ceil(time / 60)} minutes ago`;
        }
        else if (time > 86400){
          return `Posted ${Math.ceil(time / 3600)} hours ago`;
        }
        else{
          return `Posted ${Math.ceil(time / 86400)} days ago`;
        }
      }

    }
  })();
