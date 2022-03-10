const router = require('express').Router();

const userRoutes = require('./user-routes');
const recipesRoutes = require('./recipes-routes.js');
//const commentRoutes = require('./comment-routes');

router.use('/users', userRoutes);
router.use('/recipes', recipesRoutes);
//router.use('/comments', commentRoutes);

module.exports = router;

