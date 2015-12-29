(function(){
'use strict';

angular
  .module('secondLead')

  .controller('CastCtrl', [
    'cast',
    'Gridster',
    function(cast, Gridster) {
    var ctrl = this;

    ctrl.name = cast.name;

    ctrl.gridsterOpts = Gridster.getOptions();
  }])
})();