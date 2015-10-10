// counter starts at 0
Meteor.startup(function () {
  // code to run on server at startup
  console.log('on client startup');
});
Session.setDefault('counter', 0);

Template.rooms.helpers({
  counter: function () {
    return Session.get('counter');
  }
});

Template.rooms.events({
  'click button': function () {
    // increment the counter when button is clicked
    Session.set('counter', Session.get('counter') + 1);
  }
});