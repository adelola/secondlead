(function(){

'use strict';

angular
  .module('secondLead')

  .controller('SearchCtrl', [ 
    '$scope',
    '$state',
    'store',
    'SearchService', 
    function ($scope, $state, store, SearchService){
    var ctrl = this;

    ctrl.query = '';
    ctrl.dramas = SearchService.getDramas();
    ctrl.casts = SearchService.getCasts();
    ctrl.users = SearchService.getUsers();
    
    ctrl.submit = function (query){
      SearchService.get(query).then(function (result){
        console.log(result);
        SearchService.setDramas(result.dramas);
        SearchService.setCasts(result.casts);
        SearchService.setUsers(result.users);
        $state.go('search-results', {query: '?' + query})
      });
    };

    ctrl.test =  function () {
      console.log(ctrl.users);
    }
    
   

  }]);

})();