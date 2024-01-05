const router = require('express').Router();

const createRouter = require('./api/create');
const storedRouter = require('./api/stored');
const userRouter = require('./api/user');



router.use('/create', createRouter);
router.use('/stored', storedRouter);
router.use('/user', userRouter);

// user get route will render the login page
router.get('/', async (req, res) => {
    res.render('user');
});

module.exports = router;




