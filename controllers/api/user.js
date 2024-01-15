const router = require('express').Router();
const { User } = require('../../models');

router.get("/", async (req, res) => {
  res.render("user");
});
  
  // this will be used to login with a post api request
router.post('/signup', async (req, res) => {
    console.log(req.body);
    console.log("enterning the user/signup api");
    try {
        const userData = await User.create(req.body);
        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.email = userData.email;
            req.session.logged_in = true;

            res.status(200).json(userData);
        });
    } catch (error) {
        res.status(400).json(error);
    }
});

// post route will find the user ID to determine if correct email and password are entered, then use session to log user in
router.post('/login', async (req, res) => {
    try {
        console.log("enterning the user/login api");
      const userData = await User.findOne({ where: { email: req.body.email } });
      if (!userData) {
        res
          .status(400)
          .json({ message: 'Incorrect email or password, please try again' });
        return;
      }
  
      const validPassword = await userData.checkPassword(req.body.password);

      console.log(validPassword, "validPassword");
      console.log(req.body.password, "req.body.password");
  
      // icebox feature
    //   if (!validPassword) {
    //     res
    //       .status(400)
    //       .json({ message: 'Incorrect email or password, please try again' });
    //     return;
    //   }

    //   console.log(validPassword + "validPassword");
    //   console.log("userData" + userData);

      req.session.save(() => {
        req.session.user_id = userData.id;
        req.session.email = userData.email;
        req.session.logged_in = true;
        console.log("req.session.logged_in", req.session.logged_in);
        
        res.json({ user: userData, message: 'You are now logged in!' });
      });
  
    } catch (err) {
      res.status(400).json(err);
    }
  });
  
  // post route to log user out when the logout button is clicked, then destroy session
  router.post('/logout', (req, res) => {
    console.log("enterning the user/logout api");
    console.log("req.session.logged_in", req.session.logged_in);
    if (req.session.logged_in) {
      req.session.destroy(() => {
        res.status(204).end();
      });
    } else {
      res.status(404).end();
    }
  });

module.exports = router;
