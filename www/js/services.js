angular.module('starter.services', [])

.factory('Meetings', function() {
  // Might use a resource here that returns a JSON array

  var meetings = [{
  id_meeting: "Se la coller à République",
  latitude: 48.86751,
  longitude: 2.363777,
  participants: "Paul, Pierre, Jacques",
  date: "2016-11-10"
   }, {
  id_meeting: "Tournée générale d'aspirine",
  latitude: 48.852969,
  longitude: 2.349873,
  participants: "Jacqui Michel",
  date: "2016-11-10"
  }];

  return {
    all: function() {
      return meetings;
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
});
