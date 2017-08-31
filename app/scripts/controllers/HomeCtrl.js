(function() {
  function HomeCtrl(Room, Messages, $uibModal) {
    var home = this;
    this.chatrooms = Room.all;

    /*home.createRoom = function(newRoom) {
      Room.add(newRoom);
    };*/

    home.getMessages = function(roomId) {
      home.messages = Messages.getRoomById(roomId);
      return home.messages;
    };

    home.makeRoom = function() {
      $uibModal.open({
        controller: 'ModalCtrl as modal',
        templateUrl: '/templates/modal.html',
        size: 'md'
      });
    };

    home.activeRoom = function(room) {
      home.currentRoom = room;
    };
  }

  angular
    .module('blocChat')
    .controller('HomeCtrl', ['Room', 'Messages', '$uibModal', HomeCtrl]);
})();
