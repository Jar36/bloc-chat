(function() {
  function HomeCtrl(Room, Messages, $uibModal, $cookies) {

    this.chatrooms = Room.all;
    this.currentRoom = null;
    this.messages = null;

    this.currentUser = $cookies.get('blocChatCurrentUser');

    this.makeRoom = function() {
      $uibModal.open({
        animation: true,
        controller: 'ModalCtrl as modal',
        templateUrl: '/templates/modal.html',
        size: 'sm'
      });
      console.log("I am the modal")
    };

    this.createRoom = function(newRoom) {
      Room.add(newRoom);
    };

    this.getMessages = function(roomId) {
      this.messages = Messages.getRoomById(roomId);
      return this.messages;
    };

    this.activeRoom = function(room) {
      this.currentRoom = room;
    };
  }

  angular
    .module('blocChat')
    .controller('HomeCtrl', ['Room', 'Messages', '$uibModal', '$cookies', HomeCtrl]);
})();
