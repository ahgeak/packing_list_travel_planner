const router = require('express').Router();
const { User } = require('../../models');

// user get route will render the login page
router.get('/', async (req, res) => {
    try {
        // Get all users and JOIN with user data
        const userData = await User.findAll();
    
        // Serialize data so the template can read it
        const users = userData.map((user) => user.get({ plain: true }));
    
        res.json(users);
      } catch (err) {
        res.status(500).json(err);
      }
});

// this will be used to login with a post api request
router.post('/', async (req, res) => {
    console.log(req.body);
    try {
        const userData = await User.create(req.body);
        req.session.save(() => {
            req.session.email = userData.email;
            req.session.logged_in = true;

            res.status(200).json(userData);
        });
    } catch (error) {
        res.status(400).json(error);
    }
});

module.exports = router;
