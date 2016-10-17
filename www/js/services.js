angular.module('starter.services', [])

.factory('Meetings', function() {
  // Might use a resource here that returns a JSON array

  var meetings = [{
  id_meeting: "Se la coller à République",
  latitude: 48.86751,
  longitude: 2.363777,
  participants: "Paul, Pierre, Jacques",
  date: DateTime.new(2016,12,31,23,59,59)
   }, {
  id_meeting: "Tournée générale d'aspirine",
  latitude: 48.852969,
  longitude: 2.349873,
  participants: "Jacqui Michel",
  date: DateTime.new(2017,01,01,14,00,00)
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
