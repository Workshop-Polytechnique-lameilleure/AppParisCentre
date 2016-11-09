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

  $scope.createMeeting = function(name, users, date) {
     console.log("je suis dans createMeeting", name);

     var selectedUsers = users.filter(function(user){return user.checked ==1});
     var selectedUserIds = selectedUsers.map(function(user){return user.id});
     var dateFormatted = date + "T12:00:000Z";
  

   return Meetings.create(name, dateFormatted, selectedUsersIds) 
    .then(function(createdMeeting) {
     console.log("Creating Meeting", Create);
     // dans le console.log, quel est le 2e argument ?  create ou creating meeting ou Meetings.create ? Create meeting ne marche pas
     //alert("We are looking for the best location for your meeting")
     $scope.closeModal();
    })
  }
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


