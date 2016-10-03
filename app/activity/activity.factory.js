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
        getTime: getTime,
      };

      function Task() {
        this.location = 'Indiana'
        this.age = false;
        this.category = '';
        this.price = '';
        this.summary = '';
        this.fullDesc = ''
        this.time = Math.floor(Date.now() / 1000);

      }

      function getTime(oldTime){
        var newTime = Math.floor(Date.now() / 1000);
        var time = newTime - oldTime;

        if (time < 3600){
          return `Posted ${Math.ceil(time / 60)} minute(s) ago`;
        }
        else if (time < 86400){
          return `Posted ${Math.ceil(time / 3600)} hour(s) ago`;
        }
        else {
          return `Posted ${Math.ceil(time / 86400)} day(s) ago`;
        }
      }

      return service;
    }

})();
