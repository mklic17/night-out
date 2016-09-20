(function() {
  'use strict';

  angular
    .module('activityModule')
    .controller('ActivityController', ActivityController);

    ActivityController.$inject = [];
    function ActivityController(){
      var vm = this;
      vm.addActivity = addActivity;



      function addActivity(params) {
        console.log(params);
      }


    }
  })();
