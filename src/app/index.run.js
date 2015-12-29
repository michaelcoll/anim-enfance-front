(function() {
  'use strict';

  angular
    .module('anim-enfance')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
