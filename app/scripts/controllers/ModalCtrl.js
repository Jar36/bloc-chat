(function() {
  function ModalCtrl() {

  };

  angular
    .module('blocChat')
    .controller('ModalCtrl', ['Room', 'HomeCtrl', '$uibModalInstance', ModalCtrl]);
})();
