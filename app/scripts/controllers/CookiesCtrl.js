(function () {
  function CookiesCtrl (Room, $uibModalInstance, $cookies) {
    this.createUserName = function() {
      if (!this.username || this.username == '') {
        return;
      }
      $cookies.put('blocChatCurrentUser', this.username);
      $uibModalInstance.close();

      window.location.reload(true);
    };
  }

  angular
    .module('blocChat')
    .controller('CookiesCtrl', ['Room', '$uibModalInstance', '$cookies', CookiesCtrl]);
})();
