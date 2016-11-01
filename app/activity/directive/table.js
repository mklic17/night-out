(function() {
  'use strict';

  angular
    .module('activityModule')
    .directive('xtTable', xtTable)

    function xtTable() {
        return {
          templateUrl: 'activity/directive/table.html',
          restrict: 'E',
          controller: ActivityTableController,
          controllerAs: 'vm',
          bindToController: true,
          scope: {
            tasks: '='
          },
        };
    }

    ActivityTableController.$inject= [];
    function ActivityTableController() {

      var vm = this;
      vm.addOne = addOne;
      vm.getTime = getTime;
      vm.remove = remove;

      ///////////////////////

      function addOne(task) {
        task.likes += 1
        console.log(task.likes);
        vm.tasks.$save(task)
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
        else if (time < 604800){
          return `Posted ${Math.ceil(time / 86400)} day(s) ago`;
        }
        else {
          return `Posted ${Math.ceil(time / 604800)} week(s) ago`;
        }
      }

      function remove(task) {
        vm.tasks.$remove(task);
      }

    }

})();
