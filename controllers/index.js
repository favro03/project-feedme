const router = require('express').Router();
<<<<<<< HEAD

const apiRoutes = require('./api/');

router.use('/api', apiRoutes)
=======
const homeRoutes = require('./home-routes.js');
const apiRoutes = require('./api/');

router.use('/api', apiRoutes)
router.use('/', homeRoutes);
>>>>>>> develop

module.exports = router;