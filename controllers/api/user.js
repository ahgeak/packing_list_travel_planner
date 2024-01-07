const router = require('express').Router();
// const { User } = require('../../models');

// user get route will render the login page
router.get('/', async (req, res) => {
    res.render('user');
});

// this will be used to login with a post api request
router.post('/', async (req, res) => {
//     try {
//         const userData = await User.create(req.body);
//         req.session.save(() => {
//             req.session.email = userData.email;
//             req.session.logged_in = true;

//             res.status(200).json(userData);
//         });
//     } catch (error) {
//         res.status(400).json(error);
//     }
});

module.exports = router;
