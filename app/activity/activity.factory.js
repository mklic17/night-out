(function() {
  'use strict';

  angular
    .module('activityModule')
    .factory('activityFactory', activityFactory);

    activityFactory.$inject = ['$firebaseArray', 'firebaseFactory'];
    function activityFactory($firebaseArray, firebaseFactory) {

      var tasks = null;

      var service = {

        restart: restart,
        Task: Task,
        // tasksByUser: tasksByUser,
        tasks: $firebaseArray(firebaseFactory.tasks)
      };

      return service;

      /////////////////////////////////////////////

      function addOne(task) {
        console.log(task);
        sum = task.likes + 1
        vm.tasks.$save(sum)

      }

      function restart() {
        if (tasks) {
          tasks.$destroy();
          tasks = null;
        }
      }

      function Task() {
        this.location = ''
        this.age = 'No';
        this.category = '';
        this.price = '';
        this.summary = '';
        this.fullDesc = ''
        this.time = Math.floor(Date.now() / 1000);
        this.likes = Math.floor(0);
      }


      function tasksByUser(uid){
        return $firebaseArray(firebaseFactory.users.child(uid).child('tasks'));
      }

    }

})();
