const router = require('express').Router();

// create_list get request will render the create list page
router.get('/', async (req, res) => {
    return res.render('items');
  });

  // we will need a UUID for each unique page for this

module.exports = router;