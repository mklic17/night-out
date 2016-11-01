(function() {
  'use strict';

  angular
    .module('authModule')
    .factory('authFactory', authFactory);

  authFactory.$inject = ['$firebaseAuth', 'firebaseFactory', 'activityFactory'];
  function authFactory($firebaseAuth, firebaseFactory, activityFactory) {
      var auth = $firebaseAuth();

      var service = {
        auth: auth,
        isLoggedIn: isLoggedIn,
        login: login,
        logout: logout,
        createAccount: createAccount,
        // sendEmail: sendEmail
      };

      return service;

      /////////////////////////


      function createAccount(user) {
        return auth.$createUserWithEmailAndPassword(user.email, user.password);
      }

      function login(user) {
        return auth.$signInWithEmailAndPassword(user.email, user.password);
      }

      function logout(){
        activityFactory.restart();
        auth.$signOut();
      }

      function isLoggedIn() {
        return auth.$getAuth();
      }

      // function sendEmail() {
      //   firebaseFactory.emails.push({
      //     emailAddress: emailAddress
      //   });
      // }

  }

})();
