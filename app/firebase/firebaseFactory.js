(function() {
  'use strict';

  angular
    .module('firebaseModule')
    .factory('firebaseFactory', firebaseFactory);

    firebaseFactory.$inject = [];
    function firebaseFactory() {
        var refRoot = firebase.database();
        var root = refRoot.ref();

        var service = {
          refRoot: refRoot,
          root: root,
          tasks: root.child('tasks'),
          users: root.child('users'),

        }

        return service;
    }

})();
