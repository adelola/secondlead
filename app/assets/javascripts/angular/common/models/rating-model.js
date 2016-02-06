(function(){
'use strict';

angular
  .module('secondLead')
  
  .factory('RatingModel',['$http', 'Restangular', 'store', function ($http, Restangular, store){
    var currentUser = store.get('user');
    function extract (result){
      return result.data;
    }
    return {

      getAvg: function (dramaID){ 
          return $http.get('dramas/'+dramaID+'/ratings').then(extract)
      },
      
      getOne: function (dramaID, ratingID){
        return Restangular.one('dramas', dramaID).one('ratings', ratingID).get()
      },

      create: function (userID, dramaID, weight){
        return Restangular.one('dramas', dramaID).all('ratings').post({rater_id: userID, drama_id: dramaID, weight: weight})
      },

      update: function (dramaID, ratingID, weight){
        return Restangular.one('dramas', dramaID).one('ratings', ratingID).put({weight: weight})
      },

      find: function (dramaID, userID){
        return $http.get('/ratings/find', {params: {drama_id: dramaID, rater_id: userID}}).then(extract);
      },

      delete: function (dramaID, ratingID){
        return Restangular.one('dramas', dramaID).one('ratings', ratingID).remove()
      }

    };

  }])

})();