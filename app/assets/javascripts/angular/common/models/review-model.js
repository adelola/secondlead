(function(){
'use strict';

angular
  .module('secondLead')
  
  .factory('ReviewModel',['Restangular', 'store', function(Restangular, store) {
    var currentUser = store.get('user');
    return {
      
      getAll: function(dramaID){
        return Restangular.one('dramas', dramaID).getList('reviews').$object
      },
      
      getOne: function(dramaID, reviewID) {
        return Restangular.one('dramas', dramaID).one('reviews', reviewID).get()
      }

    };

  }])

})();
  