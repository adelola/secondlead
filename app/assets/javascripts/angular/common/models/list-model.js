(function(){
'use strict';

angular
  .module('secondLead')
  
  .factory('ListModel',['Restangular', 'store', function(Restangular, store) {
    var currentUser = store.get('user');
    return {

      getAll: function(userID) { 
          return Restangular.one('users', userID).getList('lists') 
      },
      
      currentUserLists: function(){
        return Restangular.one('users', currentUser.id).getList('lists').$object
      },
      
      getOne: function(userID, listID) {
        return Restangular.one('users', userID).one('lists', listID).get()
      },

      create: function(listParams) {
        return Restangular.one('users', currentUser.id).all('lists').post(listParams)
      }

    };

  }])

})();
  