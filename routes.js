Router.route('/', function () {
  //var item = Items.findOne({_id: this.params._id});
  this.render('app');
});
// Router.route('/user', function () {
//   var item = Items.findOne({_id: this.params._id});
//   this.render('user', {data: item});
// });
Router.route('/rooms', function () {
  var rooms = Rooms.find();
  this.render('rooms', {data: rooms});
});
Router.route('/room/:_id', function () {
  var room = Rooms.findOne({_id: this.params._id});
  this.render('room', {data: room});
});