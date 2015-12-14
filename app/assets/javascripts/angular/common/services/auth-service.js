(function(){

'use strict';

angular.module('secondLead.common')
  .factory('Auth', ['$http', 'LocalService', function($http, LocalService) {
	return {
	  isAuthenticated: function() {
	    return LocalService.get('auth_token');
	  },

	  login: function(credentials) {
	    var login = $http.post('/auth/authenticate', credentials);
	    login.success(function(result) {
	      LocalService.set('auth_token', result.token);
	      var user = { 
          id: result.id, 
          username: result.username
        }
        LocalService.set('user', JSON.stringify(user)); 
	    });
	    return login;
	  },

	  logout: function() {
	    LocalService.unset('auth_token');
	    LocalService.unset('user');
	  },

	  register: function(formData) {
	    LocalService.unset('auth_token');
	    var register = $http.post('/auth/register', formData);
	    register.success(function(result) {
	      LocalService.set('auth_token', JSON.stringify(result));
	    });
	    return register;
	  }

	};
  }])

})();