(function(){
'use strict';

angular
  .module('secondLead.common')
  
  .factory('UserModel',['Auth', '$http', 'Restangular', '$rootScope', 'store', function (Auth, $http, Restangular, $rootScope, store){
    var baseUsers = Restangular.all('users');

    var loggedIn = false;

    var user = '';

    function extract (result){
      return result.data;
    }

    function setLoggedIn (state){
      loggedIn = state;
      $rootScope.$broadcast('loggedIn:updated',state);
    };

    return {
      currentUser: function () {
        user = store.get('user');
        return user;
      },

      checkRelationship: function (userId){
        return $http.get('/relationships/find', { params: {follower_id: user.id, followed_id: userId}}).then(extract);
      },
      
      follow: function (userId){
        return $http.post('/relationships', {follower_id: user.id, followed_id: userId}).then(extract);
      },

      unfollow: function (relationshipId){
        return $http.delete('/relationships/'+ relationshipId).then(extract);
      },  

      getAll: baseUsers.getList().$object,  
      
      getOne: function (userId){
        return Restangular.one('users', userId).get()
      },

      getStatus: function () {
        return {
          loggedIn: loggedIn
        }
      },
 
      login: function (user){
        var auth = Auth.login({
          username: user.username,
          password: user.password
          });
        return auth;
      }, 

      register: function (newUser){
        return baseUsers.post({"user": {
          first_name: newUser.firstName,
          last_name: newUser.lastName,
          email: newUser.email,
          username: newUser.username,
          password: newUser.password }   
        });
      },

      setLoggedIn: setLoggedIn
       
    };

  }])

})();
  