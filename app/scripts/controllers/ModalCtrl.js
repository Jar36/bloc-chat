(function() {
  function ModalCtrl(Room, $uibModal, $uibModalInstance, $cookies) {

    this.createRoom = function(newRoom) {
      Room.add(newRoom);
    };

    this.cancel = function() {
      $uibModalInstance.close();
    };

    this.createRoom = function(newRoom) {
      Room.add(newRoom);
      $uibModalInstance.close();
    };

    this.createUserName = function(userName) {
      $cookies.put('blocChatCurrentUser', userName);
      $uibModalInstance.close();
    }
  };

  angular
    .module('blocChat')
    .controller('ModalCtrl', ['Room', '$uibModal' , '$uibModalInstance', '$cookies', ModalCtrl]);
})();
