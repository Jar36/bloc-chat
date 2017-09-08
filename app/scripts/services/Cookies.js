(function() {
  function BlocChatCookies($cookies, $uibModal) {
    var currentUser = $cookies.get('blocChatCurrentUser');
    if(!currentUser || currentUser === '') {
      $uibModal.open({
        animation: true,
        controller: 'CookiesCtrl as cookies',
        size: 'md',
        templateUrl: '/templates/onload-modal.html',
        backdrop: 'static'

      });
    }
    console.log('I am the on-load modal');

    this.createUserName = function(userName) {
      $cookies.put('blocChatCurrentUser', userName);
      $uibModalInstance.close();
    }
  }

  angular
    .module('blocChat')
    .run(['$cookies', '$uibModal', BlocChatCookies]);
})();
