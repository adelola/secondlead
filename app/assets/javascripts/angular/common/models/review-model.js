(function(){
'use strict';

angular
  .module('secondLead')
  
  .factory('ReviewModel',['Restangular', 'store', function(Restangular, store) {
    var currentUser = store.get('user');
    return {

      getAll: function(userID) { 
          return Restangular.one('users', userID).getList('reviews') 
      },
      
      currentUserReviews: function(){
        return Restangular.one('users', currentUser.id).getList('reviews').$object
      },
      
      getOne: function(userID, reviewID) {
        return Restangular.one('users', userID).one('reviews', reviewID).get()
      }

    };

  }])

})();
  