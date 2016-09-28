(function() {
  'use strict';

  angular
    .module('authModule')
    .factory('authFactory', authFactory);

  authFactory.$inject = ['$firebaseAuth'];
  function authFactory($firebaseAuth) {
      var auth = $firebaseAuth();

      var service = {
        register: register,
        login: login,
        logout: logout,
      };

      return service;

      /////////////////////////

      function register(user) {
        return auth.$createUserWithEmailAndPassword(user.email, user.password);
      }

      function login(user) {
        return auth.$signInWithEmailAndPassword(user.email, user.password);
      }

      function logout(){
        auth.$signOut();
      }

  }

})();
