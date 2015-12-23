(function(){
'use strict';

angular
  .module('secondLead')
  
  .factory('UserModel',['Auth', 'Restangular', function(Auth, Restangular) {
    var baseUsers = Restangular.all('users');
    var currentUser = null;

    return {
      getAll: baseUsers.getList().$object,  
      
      getOne: function(userId) {
        return Restangular.one('users', userId).get()
      },
      
      setCurrentUser:  function (user) {
      currentUser = user;
      },

      register: function(newUser){
        return baseUsers.post({"user": newUser});
      },

      login: function (user) {
        return Auth.login({
          username: user.username,
          password: user.password
        }, function(error, authData) {
          if (error) {
            currentUser = null;
            console.error('Authentication failed:', error);
          } else {
            // currentUser = authData.id;
            console.log('Logged in as:', authData.user.username);

          }
        });
      }

    };

  }])

})();
  