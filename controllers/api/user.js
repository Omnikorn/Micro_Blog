const router = require('express').Router();
const { User } = require('../../models');




router.post('/login', async (req, res) => {
    try {

      console.log("login attempting with: ", req.body)
      const userData = await User.findOne({ where: { user_email: req.body.email } });
     // console.log(userData)
      if (!userData) {
        res
          .status(400)
          .json({ message: 'Incorrect email or password, please try again' });
        return;
      }
  
      const validPassword = await userData.checkPassword(req.body.password);
  console.log("Checking password: ",validPassword)
      if (!validPassword) {
        res
          .status(400)
          .json({ message: 'Incorrect email or password, please try again' });
        return;
      }
  
      req.session.save(() => {
        req.session.user_id = userData.id;
        req.session.logged_in = true;
        
        res.json({ user: userData, message: 'You are now logged in!' });
      });
  
    } catch (err) {
      res.status(400).json(err);
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
  
 
  


  router.post("/", async (req,res) => {
console.log ("this is being created " + req.body.name)
    try {
      const newuser = await User.create({
        user_name: req.body.name,
        user_email: req.body.email,
        user_password: req.body.password,
      })
      res.json(newuser)
    } catch (err) {
      res.status(500).json(err)
    }
  } );




  module.exports = router;