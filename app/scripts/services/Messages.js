(function() {
  function Messages($firebaseArray, $cookies) {
    var Messages = {};
    var ref = firebase.database().ref().child("messages");
    var messages = $firebaseArray(ref);

    Messages.getRoomById = function(roomId){
      var roomMessages = $firebaseArray(ref.orderByChild('roomId').equalTo(roomId));
      return roomMessages;
    }

    Messages.send = function(newMessage, roomId, currentUser) {
      var currentUser = $cookies.get('blocChatCurrentUser');
      $firebaseArray(ref).$add ({
        roomId: roomId,
        username: currentUser,
        content: newMessage
      });
    }
    console.log(messages);
    return Messages;
  };

  angular
    .module('blocChat')
    .factory('Messages', ['$firebaseArray', '$cookies', Messages]);
})();
