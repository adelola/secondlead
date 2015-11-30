(function(){
'use strict';

angular
  .module('secondLead')
  
  .factory('ListModel',['Restangular', function(Restangular) {
    
     return {
      getAll: Restangular.one('users', userID).getList('lists'),
      getOne: function(listId) {
        return Restangular.one('users', userID).one('lists', listId).get()
      }
    };
  }])

})();
  