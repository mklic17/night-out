(function() {
  'use strict';

  angular
    .module('authModule')
    .factory('authFactory', authFactory);

  authFactory.$inject = ['$firebaseAuth'];
  function authFactory($firebaseAuth) {
      var auth = $firebaseAuth();

      var service = {
        auth: auth,
        register: register,
        login: login,
        logout: logout,
        isLoggedIn: isLoggedIn,

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
        console.log('Logged Out')
        auth.$signOut();
      }

      function isLoggedIn() {
        return auth.$getAuth();
      }

  }

})();
