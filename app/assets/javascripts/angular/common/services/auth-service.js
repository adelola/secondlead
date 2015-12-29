(function(){

'use strict';

angular.module('secondLead.common')
  .factory('Auth', ['$http', 'store', function($http, store) {
	return {
	  isAuthenticated: function() {
	    return store.get('jwt');
	  },

	  login: function(credentials) {
	    var login = $http.post('/auth/login', credentials);
	    login.success(function(result) {
	      store.set('jwt', result.token);
          store.set('user', result.user);
	    });
	    return login;
	  },

	  logout: function() {
	    var clearJWT = store.remove('jwt');
	    var clearUser = store.remove('user');
		return {
		  jwt: clearJWT,
		  user: clearUser
		};
	  }

	};
	
  }])

})();