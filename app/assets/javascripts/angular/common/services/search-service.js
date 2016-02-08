(function(){
'use strict';

angular
  .module('secondLead.common')

  .factory('SearchService',['$http', function ($http){
    function extract (result){
      return result.data;
    };
    var dramaResults = '';
    var userResults = '';
    var castResults = '';
     
    return {

      getResults: function (query){
        return $http.get('/search', {params: {q: query}}).then(extract);
      },

      setDramas: function (results){
        dramaResults = results;
        return dramaResults;
      },

      setCasts: function (results){
        castResults = results;
        return castResults;
      },

      setUsers: function (results){
        userResults = results;
        return userResults;
      },

      getDramas: function () {
        return dramaResults;
      },

      getCasts: function () {
        return castResults;
      },

      getUsers: function () {
        return userResults;
      }

    };

  }])
})();