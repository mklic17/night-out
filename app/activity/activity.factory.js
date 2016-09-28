(function() {
  'use strict';

  angular
    .module('activityModule')
    .factory('activityFactory', activityFactory);

    activityFactory.$inject = ['$firebaseArray', 'firebaseFactory'];
    function activityFactory($firebaseArray, firebaseFactory) {
      var service = {
        Task: Task,
        tasks: $firebaseArray(firebaseFactory.tasks),

      };

      function Task() {
        this.age = false;
        this.category = '';
        this.price = '';
        this.summary = '';
      }

      return service;
    }

})();
