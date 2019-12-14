const User = require ('../Models/User');
var bcrypt = require('bcryptjs');


const saveUser = async (req, res) => {
console.log("userController 6");
    var user = new User({
        username: (req.body.username),
        password: (req.body.password), 
        img: (req.body.img),
        email: (req.body.email),
        firstName:(req.body.firstName),
        lastName:(req.body.lastName),
        country:(req.body.country)
    })
  
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);

    await user.save(function (err) {
        
      console.log('User successfully saved.');
      console.log();
        if (err) {
            return res.send(err);
        }
        res.send("oK");

    });
  }

module.exports = {saveUser};