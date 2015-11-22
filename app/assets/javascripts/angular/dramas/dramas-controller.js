App.controller('DramasCtrl', [ '$http', function($http, $q) {
  var dramas = this;
  dramas.list1 = 'Drag and Drop with default confirmation';
  
  dramas.items = [];
  $http.get('/dramas').then(function(response) {
    dramas.items = response.data;
    console.log(response.data);
      }, function(errResponse) {
    console.error('Error while fetching dramas')
  });

  dramas.beforeDrop = function() {
    var deferred = $q.defer();
    if (confirm('Are you sure???')) {
      deferred.resolve();
    } else {
      deferred.reject();
    }
    return deferred.promise;
  };
}]);
