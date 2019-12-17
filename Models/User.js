var mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  username: {type:String, unique:true},
  password: {type:String, required: true}, 
  img: String,
  email: {type:String, unique:true, required: true},
  firstName:{type:String, required: true},
  lastName:{type:String, required: true},
  country:{type:String, required: true}/*,
  favs:{type:Array, itineraryId: mongoose.Schema.Types.ObjectId}*/
});
var User = mongoose.model('User', userSchema, "Users");

module.exports = User;