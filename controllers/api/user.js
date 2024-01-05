const router = require('express').Router();

// user get route will render the login page
router.get('/', async (req, res) => {
    res.render('user');
});

// this will be used to login with a post api request
router.post('/', async (req, res) => {
    
});

module.exports = router;
