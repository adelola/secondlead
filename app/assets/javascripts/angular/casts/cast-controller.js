(function(){
'use strict';

angular
  .module('secondLead')

  .controller('CastCtrl', [
    'cast',
    function(cast) {
    var ctrl = this;

    ctrl.name = cast.name;
    ctrl.dob = cast.dob;
  }])
})();