const Itinerary = require ('../Models/Itinerary');
const City = require("../Models/City")

const getAllItineraries = function(req, res) {
  Itinerary.find({}, function(err, itinerary) {
    res.send(itinerary);  
  });
};

const getItinerariesByCity = (req, res) => {
  let nameCity = req.params.nameCity;
      City.findOne({ name: nameCity })
        .then(city => {
    Itinerary.find({ cityId: city._id })
    .then(itinerary => {
      res.send(itinerary)
    })
    .catch(err => {
      res.send("Error itinerarios")
      console.log(err)});
        })
        .catch(err => {
    res.send("Error city")
    console.log(err)});

    // Itinerary.find()
    // .where()
    // .then(itinerary => {
    //   res.send(itinerary)
    // })
    // .catch(err => console.log(err));
};

const insertManyItineraries = (req, res) => {
    Itinerary.insertMany(
        [
            {
            "city": "London",
            "title": "Camden Pub Crawl",
            "img": "https://cdn-image.foodandwine.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/1488291445/the-red-lion-best-london-pubs-FT-SS0217.jpg?itok%3DGDxR8p6d&imgrefurl=https://www.foodandwine.com/travel/bars/londons-best-pubs&docid=jI6FQ9Nb6UQy0M&tbnid=ZVJ9egiFU7lCFM:&vet=1&w=1125&h=844&source=sh/x/im",
            "summary": "Camden Pub Crawl is the original alternative London Pub Crawl, taking you away from the tourist haunts and around some of the best bars, clubs and live music venues London has to offer. Great people, great music and outrageously good times await any Camden Crawler, with free shots, free entry, queue jump and loads of money saving drinks discounts on offer - it's not hard to see why this credible London Bar Crawl is so popular!",
            "duration": "5 hours",
            "price": "£14",
            "rating": "4", 
            "cityId":"5de26724a939781f28a2af56"
            },
            {
            "city": "London",
            "title": "Visit the O2",
            "img": "https://www.adventureconnections.co.uk/wp-content/uploads/2017/10/O2-Arena-768x288.jpg",
            "summary": "The O2 is quickly becoming one of London’s top monuments, offering activities to do day and night. The dome is filled with a fantastic selection of bars and restaurants catering for every taste – perfect for breakfast, lunch and dinner. If you are interested in something a little more active, you can buckle up and climb over the 380m walkway, reaching heights of 52m. There’s no lift or escalator, so you better be sure you can take on the challenge after taking that first step! After getting your blood pumping on top of the O2, it’s time to get your ears going in one of many concerts held at the arena. Sky also has a studio inside the O2 where you can commentate on a Premier League game, race in a F1 simulator or umpire a cricket match!",
            "duration": "2 hours",
            "price": "£30",
            "rating": "2",
            "cityId":"5de26724a939781f28a2af56"            
            },
            {
            "city": "Amsterdam",
            "title": "Hop on your bike",
            "img": "https://www.iamsterdam.com/media/bikes/girl-with-bike-amsterdamcyclechic-cc.jpg?w=977",
            "summary": "There are over 800,000 bicycles in Amsterdam. That’s more bikes than people! Cycling in Amsterdam is a way of life, made easier by the city’s unbeatable network of cycle routes and flat landscape. Amsterdam regularly comes out on top in lists of the world’s most cycle-friendly cities, and there’s no finer way to explore the city’s streets, canals and attractions than by pedal power. Cycling in Amsterdam is safe, enjoyable and invigorating - so join the locals and hop on your bike.",
            "duration": "4 hours",
            "price": "Free",
            "rating": "5",
            "cityId":"5de26724a939781f28a2af51"            
            },
            {
            "city": "Edinburgh",
            "title": "Edinburgh Castle",
            "img": "https://cdn.getyourguide.com/img/tour_img-222901-97.jpg",
            "summary": "Visit Edinburgh Castle with this ticket. Learn about the battles and sieges fought at the castle, and about the royals who lived and died within its walls. Get panoramic views over Edinburgh, see the Crown Jewels, and more.",
            "duration": "4 hours",
            "price": "20€",
            "rating": "4",
            "cityId":"5de26724a939781f28a2af52"             
            },
            {
            "city": "Edinburgh",
            "title": "Loch Ness, Glencoe & the Highlands Tour from Edinburgh",
            "img": "https://cdn.getyourguide.com/img/tour_img-771604-99.jpg",
            "summary": "Enjoy a full day tour and experience some of the most dramatic scenery the Scottish Highlands has to offer. Spend time at mysterious Glencoe and have the chance to enjoy a cruise on Loch Ness and a visit to Urquhart Castle.",
            "duration": "13 hours",
            "price": "56€",
            "rating": "5",
            "cityId":"5de26724a939781f28a2af52"             
            },
            {
            "city": "Edinburgh",
            "title": "Palace of Holyroodhouse",
            "img": "https://cdn.getyourguide.com/img/tour_img-1905737-99.jpg",
            "summary": "Discover the regal splendor of Edinburgh’s Palace of Holyroodhouse complex with an entrance ticket to the Queen’s official Scottish residence. Explore the State Apartments, see Mary Queen of Scots' historic chambers, the Throne Room, and more.",
            "duration": "3 hours",
            "price": "18€",
            "rating": "3",
            "cityId":"5de26724a939781f28a2af52",             
            },
            {
            "city": " Abu Dhabi",
            "title": "Desert Safari with BBQ, Camel Ride & Sandboarding",
            "img": "https://cdn.getyourguide.com/img/tour_img-1830357-99.jpg",
            "summary": "Experience life in the desert at the end of the day on a 4WD safari from Abu Dhabi. Watch traditional dance shows, get the chance to ride a camel and enjoy an open buffet barbecue feast.",
            "duration": "13 hours",
            "price": "AED 150",
            "rating": "5",
            "cityId":"5de26724a939781f28a2af54",             
            },
            {
            "city": " Abu Dhabi",
            "title": "Sheikh Zayed Mosque",
            "img": "https://res.cloudinary.com/ds3w3iwbk/image/upload/v1561536969/MERN/20171203_120831.jpg",
            "summary": "Explore one of the world's most spectacular sites of worship on a half-day morning or afternoon tour of the Sheikh Zayed Grand Mosque in Abu Dhabi.",
            "duration": "2 hours",
            "price": "Free",
            "rating": "4",
            "cityId":"5de26724a939781f28a2af54",             
            },
            {
            "city": "Singapore",
            "title": "Gardens by The Bay & OCBC Skyway ",
            "img": "https://res.cloudinary.com/ds3w3iwbk/image/upload/v1561537274/MERN/20170409_193332.jpg",
            "summary": "One of the top 10 most popular gardens in the world and marvel at the Flower Dome, Cloud Forest and OCBC Skyway at Singapore's amazing Gardens by the Bay.",
            "duration": "2 hours",
            "price": "Freemium",
            "rating": "5",
            "cityId":"5de26724a939781f28a2af55",             
            },
            {
            "city": "Singapore",
            "title": "Singapore River Cruise",
            "img": "https://cdn.getyourguide.com/img/tour_img-1061990-99.jpg",
            "summary": "A Singapore River Cruise is the finest way to explore the city's many iconic landmarks. With this great-value bumboat tour you'll discover Singapore's spectacular mix of heritage and modern architecture, passing historic monuments, quays and bridges.",
            "duration": "45 min",
            "price": "SGD 15 ",
            "rating": "3",
            "cityId":"5de26724a939781f28a2af55",             
            },
            {
            "city": "Sydney",
            "title": "Visit Sydney Opera House",
            "img": "https://res.cloudinary.com/ds3w3iwbk/image/upload/v1561537735/MERN/20170221_135535.jpg",
            "summary": "Discover the stories, history, and magic of Sydney Opera House with an incredible hour-long guided tour that takes you underneath the world-famous sails and along the 300 corridors of this UNESCO World Heritage Site.",
            "duration": "45 min",
            "price": "AUD 26 ",
            "rating": "4",
            "cityId":"5de26724a939781f28a2af53",             
            },
            {
            "city": "Sydney",
            "title": "Visit Sydney Opera House",
            "img": "https://res.cloudinary.com/ds3w3iwbk/image/upload/v1561537735/MERN/20170221_135535.jpg",
            "summary": "Discover the stories, history, and magic of Sydney Opera House with an incredible hour-long guided tour that takes you underneath the world-famous sails and along the 300 corridors of this UNESCO World Heritage Site.",
            "duration": "45 min",
            "price": "AUD 26 ",
            "rating": "4",
            "cityId":"5de26724a939781f28a2af53",             
            }
            ],
      (err, resp) => {
        if (err) throw res.send(err);
        res.send('se cargó en la base' + resp)
      }
    )
  };
module.exports = {getAllItineraries, getItinerariesByCity, insertManyItineraries}