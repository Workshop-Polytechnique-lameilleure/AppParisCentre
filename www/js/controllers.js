angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, $ionicModal, Meetings, Users) {
  $scope.users = [];
   Users.all().then(function(apiUsers) {
    $scope.users = apiUsers;
  });

  $ionicModal.fromTemplateUrl('templates/new-meeting.html', {
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

.controller('MeetingsCtrl', function($scope, $ionicModal, Meetings, Users) {
  $scope.meetings = [];
   Meetings.all().then(function(apiMeetings) {
    $scope.meetings = apiMeetings;
  });

  $scope.users = [];
   Users.all().then(function(apiUsers) {
    $scope.users = apiUsers;
  });

  $ionicModal.fromTemplateUrl('templates/new-meeting.html', {
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

.controller('MeetingDetailCtrl', function($scope, $stateParams, $ionicModal, Meetings) {
  $scope.meeting = Meetings.get($stateParams.meetingId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});


