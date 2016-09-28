(function() {
  'use strict';

  angular
    .module('activityModule')
    .controller('ActivityController', ActivityController);

    ActivityController.$inject = ['activityFactory', 'firebaseFactory'];
    function ActivityController(activityFactory, firebaseFactory) {

      var vm = this;
      var tasksRef = firebase.database().ref().child('tasks');

      vm.addSubmission = addSubmission;
      vm.tasks = activityFactory.tasks;
      vm.newTask = new activityFactory.Task();


      function addSubmission() {
        vm.tasks.$add(vm.newTask);
        vm.newTask = new activityFactory.Task();
      }

    }
  })();
