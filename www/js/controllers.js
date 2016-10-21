angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('MeetingsCtrl', function($scope, Meetings) {
  $scope.meetings = Meetings.all();
})

.controller('MeetingDetailCtrl', function($scope, $stateParams, $ionicModal,Meetings) {
  $scope.meeting = Meetings.get($stateParams.meetingId);
  $ionicModal.fromTemplateUrl('templates/modal-book.html', {
   scope: $scope,
   animation: 'slide-in-up'
}).then(function(modal) {
  $scope.modal = modal;
});  
  $scope.openModal = function() {
    $scope.modal.show();
  };
  $scope.closeModal = function() {
    $scope.modal.hide();
  };
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});


