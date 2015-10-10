Meteor.startup(function () {
    // code to run on server at startup
	console.log('on server startup')
 
 	//demo data!!!
  	//clear all
	if (Rooms.find().count() === 0) 
  	{
		Rooms.insert({title:'Room 1'});
		Rooms.insert({title:'Room 2'});
		Rooms.insert({title:'Room 3'});
		
		Slots.insert({roomID:Rooms.findOne({'title':'Room 2'})._id,name:'Slot 1',main_text:'Main1',secondary_text:'Bla Bla 1',editorID:Meteor.userId(),isPlaying:false,isEdited:false})
		Slots.insert({roomID:Rooms.findOne({'title':'Room 2'})._id,name:'Slot 2',main_text:'Main2',secondary_text:'Bla Bla 2',editorID:Meteor.userId(),isPlaying:true,isEdited:false})
		Slots.insert({roomID:Rooms.findOne({'title':'Room 2'})._id,name:'Slot 3',main_text:'Main3',secondary_text:'Bla Bla 3',editorID:Meteor.userId(),isPlaying:false,isEdited:true})
	}
});
