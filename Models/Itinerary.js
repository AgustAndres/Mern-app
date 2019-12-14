var mongoose = require('mongoose');
/*const Schema = mongoose.Schema;

const ItinerarySchema = new Schema({
   title: {
       type: String
   },
   profilePic: {
       type: String
   },
   rating: {
       type: Number
   },
   duration: {
       type: Number
   },
   price: {
       type: Number
   },
   hashtag: {
       type: Array
   },
   cityId:{
    type:Schema.Types.ObjectId
   },
   username:{
       type:String
   }
});*/

var ItinerarySchema = new mongoose.Schema({
    city: String,
    title: String,
    img: String,
    summary: String,
    duration: String,
    price: String,
    rating: Number,
    cityId: mongoose.Schema.Types.ObjectId
}
);
module.exports = Itinerary = mongoose.model("itinerary", ItinerarySchema, "Itinerarys");