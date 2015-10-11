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
  Template.roomPage.onRendered(function() {
  	  $('.ui.embed').embed();
  });
  
  Template.loginButtons.events({
    ready : function(){
      console.log("login button="+$("#login-sign-in-link"));
      $("#login-sign-in-link").click();
    }
  });
  Template.main.helpers({
    rooms : function() {
      return Rooms.find({}, {sort: {updatedAt: -1}});//.fetch();
    },
    userID : function() {
    	//var user = 
    	return Meteor.user().emails[0].address.split('@')[0].replace('.',' ') || Meteor.userId();
    }
  });
  Template.room.helpers({
  	slots : function() {
      return Slots.find({roomID:this._id}, {sort: {updatedAt: -1}});
    }

  });
  Template.roomPage.helpers({
  	slots : function() {
      return Slots.find({roomID:this._id}, {sort: {updatedAt: -1}});
    }

  });

/*
Rooms.upsert(Rooms.findOne({'title':'Room 2'})._id,{title:'Room 2',slots:[{name:'Slot 1',main_text:'Main',secondary_text:'Bla Bla',editorID:Meteor.userId(),isPlaying:false,isEdited:false}]})
*/
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
