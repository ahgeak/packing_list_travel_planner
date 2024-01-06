const router = require('express').Router();

const createRouter = require('./api/create');
const storedRouter = require('./api/stored');
const userRouter = require('./api/user');
const itemsRouter = require('./api/items');
const loginRouter = require('./api/login');
const signupRouter = require('./api/signup');





router.use('/create', createRouter);
router.use('/stored', storedRouter);
router.use('/user', userRouter);
router.use('/items', itemsRouter);
router.use('/login', loginRouter);
router.use('/signup', signupRouter);

// user get route will render the login page
router.get('/', async (req, res) => {
    res.render('user');
});
router.get('/signup', async (req, res) => {
    res.render('signup');
});
router.get('/login', async (req, res) => {
    res.render('login');
});

module.exports = router;




