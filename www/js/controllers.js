angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('MeetingsCtrl', function($scope, Meetings) {
  $scope.meetings = Meetings.all();
})

.controller('MeetingDetailCtrl', function($scope, $stateParams, Meetings) {
  $scope.meeting = Meetings.get($stateParams.meetingId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
