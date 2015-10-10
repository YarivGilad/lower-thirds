Router.route('/', function () {
  //var item = Items.findOne({_id: this.params._id});
  this.render('app');
});
// Router.route('/user', function () {
//   var item = Items.findOne({_id: this.params._id});
//   this.render('user', {data: item});
// });
// Router.route('/rooms', function () {
//   var rooms = Rooms.find();
//   this.render('rooms', {data: rooms});
// });
Router.route('/room/:_id', function () {
  var roomID = this.params._id.substr(1);//to remove :
  var room = Rooms.findOne({_id: roomID});
  this.render('roomPage', {data: room});
});

Router.route('logout', {
        path: '/logout',
        onBeforeAction: [function() {
            this.route('/');
        }],
        waitOn: function() { return Meteor.logout()}
    });

// Router.route('/room/:id/slots/:id', function () {
//   var slot = Slots.findOne();
//   this.render('slot', {data: slot});
// });
