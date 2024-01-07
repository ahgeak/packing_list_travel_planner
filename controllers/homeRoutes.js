const router = require('express').Router();
const { List, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    // Get all lists and JOIN with user data
    const listData = await List.findAll();

    // Serialize data so the template can read it
    const lists = listData.map((list) => list.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render('user', { 
      lists, 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/list/:id', async (req, res) => {
  try {
    const listData = await List.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['email'],
        },
      ],
    });

    const list = listData.get({ plain: true });

    res.render('list', {
      ...list,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Use withAuth middleware to prevent access to route
router.get('/create', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: List }],
    });

    const user = userData.get({ plain: true });

    res.render('create', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/api/create');
    return;
  }

  res.render('login');
});

module.exports = router;
