(function() {
  'use strict';

  angular
    .module('activityModule')
    .factory('activityFactory', activityFactory);

    activityFactory.$inject = ['$firebaseArray','firebaseFactory'];
    function activityFactory($firebaseArray, firebaseFactory) {
      var vm = this;
      var task = null;


      var factory = {
        Task: Task,

      }

      function Task() {
        this.age = false;
        this.category = '';
        this.price = '';
        this.place = '';
      }

      return factory;
    }

})();
