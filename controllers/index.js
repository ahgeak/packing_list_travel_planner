const router = require('express').Router();

const createListRouter = require('./api/create-list');
const searchRouter = require('./api/search');
const suggestRouter = require('./api/suggest');
const userRouter = require('./api/user');


router.use('/create-list', createListRouter);
router.use('/search', searchRouter);
router.use('/suggest', suggestRouter);
router.use('/user', userRouter);

// user get route will render the login page
router.get('/', async (req, res) => {
    res.render('user');
});

module.exports = router;