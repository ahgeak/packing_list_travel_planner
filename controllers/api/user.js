const router = require('express').Router();
const { User } = require('../../models');

router.get("/", async (req, res) => {
  res.render("user");
});

// user get route will render the login page
// router.get('/', async (req, res) => {
//     try {
//         // Get all users and JOIN with user data
//         const userData = await User.findAll();
    
//         // Serialize data so the template can read it
//         const users = userData.map((user) => user.get({ plain: true }));
    
//         res.json(users);
//       } catch (err) {
//         res.status(500).json(err);
//       }
// });



// router.post('/', async (req, res) => {
//     try {
//       const userData = await User.create(req.body);
  
//       req.session.save(() => {
//         req.session.user_id = userData.id;
//         req.session.logged_in = true;
  
//         res.status(200).json(userData);
//       });
//     } catch (err) {
//       res.status(400).json(err);
//     }
//   });
  
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
