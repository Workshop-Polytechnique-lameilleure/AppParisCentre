angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('MeetingsCtrl', function($scope, Meetings) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.meetings = Meetings.all();
  $scope.remove = function(meeting) {
    Meetings.remove(meeting);
  };
})

.controller('MeetingDetailCtrl', function($scope, $stateParams, Meetings) {
  $scope.meeting = Meetings.get($stateParams.meetingId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
