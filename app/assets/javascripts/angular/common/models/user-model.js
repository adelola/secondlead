(function(){
'use strict';

angular
  .module('secondLead')
  
  .factory('UserModel',['Auth', 'Restangular', '$rootScope', 'store', function(Auth, Restangular, $rootScope, store) {
    var baseUsers = Restangular.all('users');

    var loggedIn = false;

    function setLoggedIn(state){
      loggedIn = state;
      $rootScope.$broadcast('loggedIn:updated',state);
    };

    return {

      currentUser: function() {
        return store.get('user');
      },

      getAll: baseUsers.getList().$object,  
      
      getOne: function(userId) {
        return Restangular.one('users', userId).get()
      },

      getStatus: function() {
        return {
          loggedIn: loggedIn
        }
      },
 
      login: function (user) {
        var auth = Auth.login({
          username: user.username,
          password: user.password
          });
        return auth;
      }, 

      register: function(newUser){
        return baseUsers.post({"user": {
          first_name: newUser.firstName,
          last_name: newUser.lastName,
          email: newUser.email,
          username: newUser.username,
          password: newUser.password }   
        });
      },

      setLoggedIn: setLoggedIn
       
    } ;

  }])

})();
  