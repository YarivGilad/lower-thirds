//---------
//  Rooms
//---------
Rooms = new Mongo.Collection("Rooms");

RoomSchema = new SimpleSchema({
 
 slots: {
   	  type: [String]
 },
 title : {
   type: String
 }
 
});
//Rooms.attachSchema ???
//---------
//  Slots
//---------
Slots = new Mongo.Collection("Slots");

SlotSchema = new SimpleSchema(
{ 
 name: {
   	  type: String
 },
 main_text : {
   type: String
 },
 secondary_text : {
   type: String
 },
 isPlaying : {
	 type : Boolean
 },
 isEdited : {
	 type : Boolean
 },
 editorID : {
	 type : String
 },
 animation : 
 {	type: {
	 enter : {
		 animType : {
			 type:String
		 },
		 duration : {
			 type : Number
		 },
		 easing :{
			 type : String
		 }
	 },
	 exit : {
		 animType : {
			 type:String
		 },
		 duration : {
			 type : Number
		 },
		 easing :{
			 type : String
		 }
	 },
	 during : {
		 animType : {
			 type:String
		 },
		 duration : {
			 type : Number
		 },
		 easing :{
			 type : String
		 }
	 }
	}
 }
 
});