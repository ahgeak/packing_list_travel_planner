const router = require('express').Router();

// suggest get request will render the suggested packing list page
router.get('/', async (req, res) => {
    return res.render('stored');
  });

module.exports = router;