(function() {
  function ModalCtrl(Room, HomeCtrl, $uibModal, $uibModalInstance) {
    this.cancel = function() {
      $uibModalInstance.close();
    }

    this.createRoom = function(newRoom) {
      Room.add(newRoom);
      $uibModalInstance.close();
    };
  };

  angular
    .module('blocChat')
    .controller('ModalCtrl', ['Room', 'HomeCtrl', '$uibModal' , '$uibModalInstance', ModalCtrl]);
})();
