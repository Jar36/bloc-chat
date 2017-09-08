(function() {
  function HomeCtrl(Room, Messages, $uibModal, $cookies) {

    this.chatrooms = Room.all;
    this.currentRoom = null;
    this.messages = null;
    this.currentUser = $cookies.get('blocChatCurrentUser');
    this.newMessage = {
      content: null,
      roomId: null,
      sentAt: null,
      username: null
    }

    this.makeRoom = function() {
      $uibModal.open({
        animation: true,
        controller: 'ModalCtrl as modal',
        templateUrl: '/templates/modal.html',
        size: 'md'
      });
      console.log("I am the modal")
    };

    this.createRoom = function(newRoom) {
      Room.add(newRoom);
    };

    this.getMessages = function(roomId) {
      this.messages = Messages.getRoomById(roomId);
      return this.messages;
    }

    this.activeRoom = function(room) {
      this.currentRoom = room;
      this.messages = Messages.getRoomById(room.$id);
    }

    this.sendMessage = function(newMessage) {
      this.newMessage.roomId = this.currentRoom.$id;
      this.newMessage.username = this.currentUser;
      this.newMessage.sentAt = firebase.database.ServerValue.TIMESTAMP;
      console.log(this.currentUser);
      console.log(this.currentRoom.$id);
      Messages.send(this.newMessage);
    }
  }

  angular
    .module('blocChat')
    .controller('HomeCtrl', ['Room', 'Messages', '$uibModal', '$cookies', HomeCtrl]);
})();
