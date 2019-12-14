const express = require("express");
const citiController = require("./controller/cityController");
const itineraryController = require("./controller/itineraryController");
const userController = require("./controller/userController");
const authController = require("./controller/authController")
const app = express.Router();

app.get('/', function(req, res) {
    res.send('Hello world');  
});

app.get('/test', function(req, res) {
    res.send('im the test page!'); 
});


app.get("/Cities/InsertCities", citiController.insertManyCities);
app.get("/Cities/all", citiController.getAllCities);
app.post("/Cities/save", citiController.saveCity);
app.get("/Cities/:name", citiController.findCitiesByName);

app.get("/Itinerarys",itineraryController.getAllItineraries);
app.get("/Itinerarys/InsertItineraies",itineraryController.insertManyItineraries);
app.get("/Itinerarys/:nameCity",itineraryController.getItinerariesByCity);

app.post("/saveUser",userController.saveUser);

app.post("/login",authController.logear)
app.get('/logins',authController.authLogin)


module.exports = app
