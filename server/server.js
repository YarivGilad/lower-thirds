Meteor.startup(function () {
    // code to run on server at startup
	console.log('on server startup')
 
 	//demo data!!!
  	//clear all
		// Slots.remove({});
  // 		Rooms.remove({});
	if (Rooms.find().count() === 0) 
  	{
		Rooms.insert({title:'Room 1',createdAt: new Date(),updatedAt: new Date()});
		Rooms.insert({title:'Room 2',createdAt: new Date(),updatedAt: new Date()});
		Rooms.insert({title:'Room 3',createdAt: new Date(),updatedAt: new Date()});
		
		Slots.insert({roomID:Rooms.findOne({'title':'Room 2'})._id,name:'Slot 1',main_text:'Main1',secondary_text:'Bla Bla 1',editorID:this.userId,isPlaying:false,isEdited:false,createdAt: new Date(),updatedAt: new Date()});
		Slots.insert({roomID:Rooms.findOne({'title':'Room 2'})._id,name:'Slot 2',main_text:'Main2',secondary_text:'Bla Bla 2',editorID:this.userId,isPlaying:true,isEdited:false,createdAt: new Date(),updatedAt: new Date()});
		Slots.insert({roomID:Rooms.findOne({'title':'Room 2'})._id,name:'Slot 3',main_text:'Main3',secondary_text:'Bla Bla 3',editorID:this.userId,isPlaying:false,isEdited:true,createdAt: new Date(),updatedAt: new Date()});

		Rooms.update(Rooms.findOne({'title':'Room 2'})._id, {$set:{updatedAt: new Date()}});
	}
});
