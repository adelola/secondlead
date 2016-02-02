(function(){
'use strict';

angular
  .module('secondLead.common')

  .factory('SearchService',['$http', function ($http){
    function extract (result){
      return result.data;
    }
     
    return {

      get: function (query){
        return $http.get('/search', {params: {q: query}}).then(extract);
      }
    };

  }])
})();