(function() {
  'use strict';

  angular
    .module('firebaseModule')
    .factory('firebaseFactory', firebaseFactory);

    firebaseFactory.$inject = [];
    function firebaseFactory() {
        var root = firebase.database().ref();

        var service = {
          root: root,
          tasks: root.child('tasks'),
        }

        return service;
    }

})();
