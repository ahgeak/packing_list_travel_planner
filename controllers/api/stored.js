const { response } = require('express');
const { List } = require('../../models');
const router = require('express').Router();

// suggest get request will render the suggested packing list page
//  router.get('/', async (req, res) => {
//      return res.render('stored');
//   });

router.get('/', async (req, res) => {
  try {
    // Get all lists and JOIN with user data
    const listData = await List.findAll({
      // where: {
      //   user_id: req.session.user_id
      // }
    });

    // Serialize data so the template can read it
    const lists = listData.map((list) => list.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render('stored', {
      lists
      // logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  console.log(req.body);
  try {
    console.log(req.body);
    // console.log(req.session.email);
    // console.log(req.session.user_id);
    console.log(req.body);
    // Get all lists and JOIN with user data
    const listData = await List.create({
      ...req.body,
      // email: req.session.email,
      // user_id: req.session.user_id
    });
    res.redirect("/");
  } catch (err) {
    console.log(err);
    // res.status(500).json(err);
    res.redirect("/");
  }
});

module.exports = router;