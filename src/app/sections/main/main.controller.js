(function () {
  'use strict';

  angular
    .module('anim-enfance.section.main', [])
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($scope, toastr) {

    $scope.showToastr = function () {
      toastr.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>');
    }
  }
})();
