(function() {
  function HomeCtrl(Room, Messages, $uibModal) {
    var home = this;
    this.chatrooms = Room.all;

    home.createRoom = function(newRoom) {
      Room.add(newRoom);
    };

    home.getMessages = function(roomId) {
      home.messages = Messages.getRoomById(roomId);
      
      return home.messages;
    };


    home.makeRoom = function() {
      $uibModal.open({
        templateUrl: '/templates/modal.html',
        size: 'sm',
        controller: 'ModalCtrl as modal'
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
