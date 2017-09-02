(function() {
  function HomeCtrl(Room, Messages, $uibModal) {
    var home = this;
    this.chatrooms = Room.all;

    home.makeRoom = function() {
      $uibModal.open({
        animation: true,
        controller: 'ModalCtrl as modal',
        templateUrl: '/templates/modal.html',
        size: 'sm'
      });
      console.log('I am the modal');
    };

    home.createRoom = function(newRoom) {
      Room.add(newRoom);
    };

    home.getMessages = function(roomId) {
      home.messages = Messages.getRoomById(roomId);
      return home.messages;
    };

    home.activeRoom = function(room) {
      home.currentRoom = room;
    };
  }

  angular
    .module('blocChat')
    .controller('HomeCtrl', ['Room', 'Messages', '$uibModal', HomeCtrl]);
})();
