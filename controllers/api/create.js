const router = require('express').Router();

// create_list get request will render the create list page
router.get('/', async (req, res) => {
     res.render('create');
  });

module.exports = router;