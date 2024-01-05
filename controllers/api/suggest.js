const router = require('express').Router();

// search get request will render the search page
router.get('/', async (req, res) => {
    return res.render('suggest');
  });

module.exports = router;