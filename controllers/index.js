const router = require("express").Router();

// added these 
const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');

// added these 
router.use('/', homeRoutes);
router.use('/api', apiRoutes);

module.exports = router;
