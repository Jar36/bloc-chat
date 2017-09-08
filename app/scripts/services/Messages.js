(function() {
  function Messages($firebaseArray, $cookies) {

    var Messages = {};
    var ref = firebase.database().ref().child("messages");
    var messages = $firebaseArray(ref);

    Messages.getRoomById = function(roomId) {
        return $firebaseArray(ref.orderByChild("roomId").equalTo(roomId));
    };

    Messages.send = function(newMessage) {
      // Send method logic
      messages.$add(newMessage);
      
    };

    return Messages;

    }

  angular
    .module('blocChat')
    .factory('Messages', ['$firebaseArray', '$cookies', Messages]);
})();
