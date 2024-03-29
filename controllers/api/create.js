const router = require('express').Router();
const { List } = require('../../models');
const withAuth = require('../../utils/auth');

// get route to render create.handlebars
router.get('/', async (req, res) => {
  res.render('create');
});

// post route uses withAuth by taking req.Body to use in the session
router.post('/', withAuth, async (req, res) => {
  try {
    const newList = await List.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.render('create');
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const listData = await List.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!listData) {
      res.status(404).json({ message: 'No list found with this id!' });
      return;
    }

    res.status(200).json(listData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
