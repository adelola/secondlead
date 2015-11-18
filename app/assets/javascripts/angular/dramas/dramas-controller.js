App.controller('DramasCtrl', function($q) {
  var dramas = this;
  dramas.list1 = 'Drag and Drop with default confirmation';
  dramas.list2 = {};
  dramas.beforeDrop = function() {
    var deferred = $q.defer();
    if (confirm('Are you sure???')) {
      deferred.resolve();
    } else {
      deferred.reject();
    }
    return deferred.promise;
  };
});
