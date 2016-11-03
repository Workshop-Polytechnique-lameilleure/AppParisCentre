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


$scope.createMeeting = function(name, users, date) {
  console.log("je suis dans createMeeting et j'ai tapé :", name);
  // var selectedUsers :
var selectedUsers = users.filter(function(user){return user.checked ==1});
  // var selectedUsersIds : je recupere les ids à partir des users
  //var selectedUsersIds = ...

  //return Meetings.create(name, date, selectedUsers) //l'argument devra être selectedUsersIds à la place de selectedUsers
   // .then(function(createdMeeting) {
     // console.log("Creating Meeting", creating meeting);
     // alert("Your meeting was created and its number is" + creatingmeeting.id);
     // $scope.closeModal();
    //})
 // }
}




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


