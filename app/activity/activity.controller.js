(function() {
  'use strict';

  angular
    .module('activityModule')
    .controller('ActivityController', ActivityController);

    ActivityController.$inject = [];
    function ActivityController(){
      var vm = this;
      vm.newSubmission = new Submission();

      function Submission() {
        this.age = false;
        this.category = '';
        this.price = '';
        this.place = '';
        console.log(this.category);
      }

    }
  })();
