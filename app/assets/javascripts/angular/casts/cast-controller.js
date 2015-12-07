(function(){
'use strict';

angular
  .module('secondLead')

  .controller('CastCtrl', [
    'Gridster',
    'cast',
    function(Gridster, cast) {
    var ctrl = this;

    ctrl.name = cast.name;

    ctrl.gridsterOpts = Gridster.getOptions();
  }])
})();