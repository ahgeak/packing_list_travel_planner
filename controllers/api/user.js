const router = require('express').Router();

// user get route will render the login page
router.get('/', async (req, res) => {
    res.render('user');
});

module.exports = router;