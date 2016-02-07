(function(){

'use strict';

angular
  .module('secondLead')

  .controller('MainCtrl', [ 
    'Auth',
    '$scope',
    'SearchService',
    '$state',
    'store',
    'UserModel', 
    function (Auth, $scope, SearchService, $state, store, UserModel){
    var main = this;
    main.currentUser = store.get('user');
    main.query = '';

    main.logout = function () {
      Auth.logout();
      main.currentUser = null;
      UserModel.setLoggedIn(false);
      $state.go('login');
    };

    main.showResults = function (query){
      var q = query.split(" ").join("_");
      $state.go('search-results', {query: q});
    };

    main.submitSearch = function (query){
      SearchService.getResults(query).then(function (result){
        console.log(result);
        SearchService.setDramas(result.dramas);
        SearchService.setCasts(result.casts);
        SearchService.setUsers(result.users);
        main.showResults(query);
       
      });
    };


    $scope.$on('loggedIn:updated', function (event,data){
      main.loggedIn = UserModel.getStatus().loggedIn;
      main.currentUser = store.get('user');
    });

  }]);

})();