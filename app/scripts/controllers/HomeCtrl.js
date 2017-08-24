(function() {
  function HomeCtrl(Room) {
    this.chatrooms = Room.all;
    
    this.createRoom = function(newRoom) {
      Room.add(newRoom);
    };

  }

  angular
    .module('blocChat')
    .controller('HomeCtrl', ['Room', HomeCtrl]);
})();
