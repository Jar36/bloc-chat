(function() {
  function Messages($firebaseArray) {
    var Messages = {};
    var ref = firebase.database().ref().child("messages");
    var messages = $firebaseArray(ref);

    Messages.getRoomById = function(roomId){
      var roomMessages = $firebaseArray(ref.orderByChild('roomId').equalTo(roomId));
      return roomMessages;
    }
    
    return Messages;
  };

  angular
    .module('blocChat')
    .factory('Messages', ['$firebaseArray', Messages]);
})();
