const router = require('express').Router();
const { User } = require('../../models');

//post request that handles signup button login page and found in public/login.js.  request to /api/users
router.post('/', async (req, res) => {

 
  try {
    const userData = await User.create(req.body)

    req.session.save(() => {
      //the data coming back out of the server will have a user id. set it equal to req.session.user_id)
      req.session.user_id = userData.id;
      req.session.logged_in = true;

    // //does the response have the req.session attached? No, appears to be only the 3 data fields
      res.status(200).json(userData)
    })

  } catch (err) {
    res.status(400).json(err)
  }
});


//post request that handles login button on login page and found in public/login.js. request to api/users/login
//notice the check password to the beginning of user model


router.post('/login', async (req, res) => {
  console.log(req.body)

  try {
    const userData = await User.findOne({ where: { username: req.body.username }})
    
    if(!userData) {
      res.status(600).json({ message: "No user data found" });
      console.log("no user DATA!!!!")
    }

    const validPassword = await userData.checkPassword(req.body.password);

      //NOTE FOR TOMRROW.  HOW TO DO DIFFERENT ALERTS FOR DIFFERENT ERRORS. USERNAME TAKEN OR INVALID PASSWORD (STE THESE IN MODELS)
    if (!validPassword) {
      console.log("no valid password")
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.status(200).json(userData.username);
    });
    
  }
  catch (err) {
    res.status(400).json(err)
  }
  

});

router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});


module.exports = router;







  //haven't made this request yet

