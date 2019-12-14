var mongoose = require('mongoose');

const citySchema = mongoose.Schema({
  name: String,
  country: String, 
  img: String,
});
var City = mongoose.model('City', citySchema, "cities");

module.exports = City;
/*
var ciuda = new City ({

  _id: new mongoose.Types.ObjectId(),

  name: 'Napoli',

  country: 'Italey'

});


ciuda.save(function(err) {

  if (err) throw err;

    console.log('City successfully saved.');

});
*/
/*var mongoose = require('mongoose');

var myTinerarySchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name:  String,
    country: String
});

//module.exports = mongoose.model('City', myTinerarySchema)

var City = mongoose.model('City', myTinerarySchema);

module.exports = City;*/
/*
let CityModel = require('./name')

let msg = new CityModel({
    name:  'Paris',
    country: 'France'
})

msg.save()
   .then(doc => {
     console.log(doc)
   })
   .catch(err => {
     console.error(err)
   })

   CityModel
  .find({
    name:  'Paris',
    country: 'France'   // search query
  })
  .then(doc => {
    console.log(doc)
  })
  .catch(err => {
    console.error(err)
  })

 */