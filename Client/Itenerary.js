const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const ItenerarySchema = new Schema ({
    title:{type: String},
    profilePic:{type: String},
    rating:{type: String},
    duration:{type: Number},
    price:{type: Number},
    hashtag:{type: Array},
})

