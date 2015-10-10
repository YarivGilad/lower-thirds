// counter starts at 0
Meteor.startup(function () {
  // code to run on server at startup
  console.log('on client startup');
});
  Template.main.helpers({
    loggedin : function(){
      return Meteor.user()!=null;
    },
    userId : function(){
      return Meteor.userId();
    }

  });
  Template.main.onRendered(function () {
    Accounts._loginButtonsSession.set('dropdownVisible', true);
    Session.set("Meteor.loginButtons.dropdownVisible",true);
  });

  Template.loginButtons.events({
    ready : function(){
      console.log("login button="+$("#login-sign-in-link"));
      $("#login-sign-in-link").click();
    }
  });
//*******
  // counter starts at 0
  // Session.setDefault('counter', 0);

  // Template.rooms.helpers({
  //   counter: function () {
  //     return Session.get('counter');
  //   }
  // });

  // Template.rooms.events({
  //   'click button': function () {
  //     // increment the counter when button is clicked
  //     Session.set('counter', Session.get('counter') + 1);
  //   }
  // });
