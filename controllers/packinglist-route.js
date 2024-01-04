const router = require('express').Router();
router.get('/', async (req, res) => {
    res.render('user');
});

router.get('/create_list/', async (req, res) => {
    // This method renders the 'dish' template, and uses params to select the correct dish to render in the template, based on the id of the dish.
    return res.render('create_list');
  });

  router.get('/search/', async (req, res) => {
    // This method renders the 'dish' template, and uses params to select the correct dish to render in the template, based on the id of the dish.
    return res.render('search');
  });

  router.get('/storedlist/', async (req, res) => {
    // This method renders the 'dish' template, and uses params to select the correct dish to render in the template, based on the id of the dish.
    return res.render('storedlist');
  });

  router.get('/suggest/', async (req, res) => {
    // This method renders the 'dish' template, and uses params to select the correct dish to render in the template, based on the id of the dish.
    return res.render('suggest');
  });

  

module.exports = router;