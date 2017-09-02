(function() {
  function BlocChatCookies($cookies, $uibModal) {
    var currentUser = $cookies.get('blocChatCurrentUser');
    if(!currentUser || currentUser === '') {
      $uibModal.open({
        animation: true,
        controller: 'ModalCtrl as modal',
        size: 'sm',
        templateUrl: '/templates/onload-modal.html',
        backdrop: 'static',
        keyboard: false
      });
    }
    console.log('I am the onload modal');
  }

  angular
    .module('blocChat')
    .run(['$cookies', '$uibModal', BlocChatCookies]);
})();
