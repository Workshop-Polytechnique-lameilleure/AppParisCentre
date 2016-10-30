angular.module('starter.services', [])

.factory('Meetings',function($http) {
  // Might use a resource here that returns a JSON array

  var meetings = []

  return {
    all: function() {
      return $http.get("https://api-pariscentre.herokuapp.com/meetings.json")
        .then(function(response) {
          meetings = response.data;
          return meetings;
        })      
    },

    get: function(meetingId) {
      for (var i = 0; i < meetings.length; i++) {
        if (meetings[i].id === parseInt(meetingId)) {
          return meetings[i];
        }
      }
      return null;
    }
  };
})

.factory('Users',function($http) {
  // Might use a resource here that returns a JSON array

  var users = []

  return {
    all: function() {
      return $http.get("https://api-pariscentre.herokuapp.com/users.json")
        .then(function(response) {
          users = response.data;
          return users;
        })      
    },
  };
});    