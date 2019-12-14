const City = require("../Models/City")

const insertManyCities = (req, res) => {
  City.insertMany(
    [
      {
        "img": "https://res.cloudinary.com/ds3w3iwbk/image/upload/v1559669413/MERN/20170624_104816.jpg",
        "name": "Amsterdam",
        "country": "Netherland"
      },
      {
        "img": "https://res.cloudinary.com/ds3w3iwbk/image/upload/v1560349362/MERN/20161125_152715_Richtone_HDR.jpg",
        "name": "Edinburgh",
        "country": "Scotland"
      },
      {
        "img": "https://res.cloudinary.com/ds3w3iwbk/image/upload/v1560349488/MERN/20170221_210941.jpg",
        "name": "Sydney",
        "country": "Australia"
      },
      {
        "img": "https://res.cloudinary.com/ds3w3iwbk/image/upload/v1560349570/MERN/20171105_190049.jpg",
        "name": "Abu Dhabi",
        "country": "United Arab Emirates"
      },
      {
        "img": "https://res.cloudinary.com/ds3w3iwbk/image/upload/v1560349630/MERN/20170409_193026.jpg",
        "name": "Singapore",
        "country": "Singapore"
      },
      {
        "img": "https://res.cloudinary.com/ds3w3iwbk/image/upload/v1560349735/MERN/20131227_134911.jpg",
        "name": "London",
        "country": "United Kingdom"
      },
      {
        "img": "https://www.google.com/search?biw=1112&bih=718&tbm=isch&sa=1&ei=EPkdXc_tFZHJwQK81YigDw&q=verona+arena&oq=verona+&gs_l=img.1.4.35i39l2j0j0i67l3j0j0i67j0l2.9120.9120..11060...0.0..0.63.63.1......0....1..gws-wiz-img.Ph-K57UVE34#imgrc=Xmfkd6LiUtNLIM:",
        "name": "Verona",
        "country": "Italia"
      },
      {
        "img": "https://www.toulouse-tourisme.com/sites/www.toulouse-tourisme.com/files/styles/top_banniere/public/thumbnails/image/garonne.jpg?itok=8EbHwsvs",
        "name": "Toulouse",
        "country": "France"
      },
      {
        "img": "https://res.cloudinary.com/ds3w3iwbk/image/upload/v1568970561/MERN/20160206_101158_Richtone_HDR.jpg",
        "name": "Vienna",
        "country": "Austria"
      },
      {
        "img": "https://res.cloudinary.com/ds3w3iwbk/image/upload/v1570637687/MERN/20171130_172803.jpg",

        "name": "Dubai",
        "country": "United Arab Emirates"
      },
      {
        "img": "",

        "name": "Ciudad Real",
        "country": "Spain"
      },
      {
        "img": "https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.neverendingvoyage.com%2Fwp-content%2Fuploads%2F2018%2F05%2Fview-tower-bologna-hills.jpg&imgrefurl=https%3A%2F%2Fwww.neverendingvoyage.com%2Fthings-to-do-in-bologna-italy%2F&docid=rWKlETWFZepZHM&tbnid=Re2_p3Cgr_gkEM%3A&vet=10ahUKEwjFnuSjzvblAhXLDuwKHXBbCisQMwh6KAAwAA..i&w=1500&h=1125&bih=660&biw=1280&q=bologna&ved=0ahUKEwjFnuSjzvblAhXLDuwKHXBbCisQMwh6KAAwAA&iact=mrc&uact=8",

        "name": "Bologna",
        "country": "Italy"
      },
      {
        "img": "https://res.cloudinary.com/ds3w3iwbk/image/upload/v1570632597/MERN/20180519_150452.jpg",

        "name": "Buenos Aires",
        "country": "Argentina"
      },
      {
        "img": "https://media.tacdn.com/media/attractions-splice-spp-674x446/06/6a/b6/81.jpg",

        "name": "Amman(petra)",
        "country": " Jordan"
      },
      {
        "img": "https://res.cloudinary.com/ds3w3iwbk/image/upload/v1570632597/MERN/20180519_150452.jpg",

        "name": "Roma",
        "country": "Italia"
      },
      {
        "img": "https://res.cloudinary.com/ds3w3iwbk/image/upload/v1570632597/MERN/20180519_150452.jpg",

        "name": "Rimini",
        "country": "Italia"
      }
    ],
    (err, resp) => {
      if (err) throw res.send(err);
      res.send('se cargó en la base' + resp)
    }
  )
};

const getAllCities = function (req, res) {
  City.find({}, function (err, cities) {
    res.send(cities);
  });
};


const findCitiesByName = (req, res) => {
  let cityRequested = req.params.name;
  City.findOne({ name: cityRequested })
    .then(city => {
      res.send(city)
    })
    .catch(err => console.log(err));
};

const saveCity = (req, res) => {

  console.log(req.body.name);
  console.log(req.body.country);
  console.log(req.body.img);
  var ciudad = new City({
    name: req.body.name,
    country: req.body.country,
    img: req.body.img
  })

  ciudad.save(function (err) {
    if (err) throw err;

    console.log('City successfully saved.');
  });
  res.send("oK");
}

module.exports = { insertManyCities, getAllCities, findCitiesByName, saveCity }