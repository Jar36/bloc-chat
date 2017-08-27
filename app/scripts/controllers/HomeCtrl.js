(function() {
  function HomeCtrl(Room, $uibModal) {
    var home = this;
    this.chatrooms = Room.all;

    home.createRoom = function(newRoom) {
      Room.add(newRoom);
    };

    home.makeRoom = function() {
      $uibModal.open({
        templateUrl: '/templates/modal.html',
        size: 'sm',
        controller: 'ModalCtrl as modal'
      });
    };


    home.activeRoom = function(room) {
      home.currentRoom = room


    };
  }

  angular
    .module('blocChat')
    .controller('HomeCtrl', ['Room', '$uibModal', HomeCtrl]);
})();
