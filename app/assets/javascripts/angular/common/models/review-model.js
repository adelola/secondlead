(function(){
'use strict';

angular
  .module('secondLead')
  
  .factory('ReviewModel',['$http', 'Restangular', 'store', function($http, Restangular, store) {
    var currentUser = store.get('user');
    function extract(result) {
      return result.data;
    };

    return {
      
      getAll: function(dramaID){
        return Restangular.one('dramas', dramaID).getList('reviews').$object
      },
      
      getOne: function(dramaID, reviewID) {
        return Restangular.one('dramas', dramaID).one('reviews', reviewID).get()
      },

      create: function(dramaID, userID, review) {
        return Restangular.one('dramas', dramaID).all('reviews').post({drama_id: dramaID, body: review, reviewer_id: userID})
      },

      find: function(dramaID, userID){
        return $http.get('/reviews/find', {params: {drama_id: dramaID, reviewer_id: userID}}).then(extract);
      },

      update: function(dramaID, reviewID,review){
        return Restangular.one('dramas', dramaID).one('reviews', reviewID).put({body: review})
      },

      delete: function(dramaID, reviewID){
        return Restangular.one('dramas', dramaID).one('reviews', reviewID).remove()
      }

    };

  }])

})();
  