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

    ctrl.huh = "HUH";

    ctrl.query = '';
    ctrl.submit = function (query){
      SearchService.get(query).then(function (result){
        console.log(result);
        ctrl.dramas = result.dramas;
        ctrl.users = result.users;
        ctrl.casts = result.cast;
        $state.go('search-results', {query: '?' + query})

      });
    };

    ctrl.test =  function () {
      console.log(ctrl.dramas);
    }
    
   

  }]);

})();