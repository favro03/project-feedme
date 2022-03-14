const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User, Comment } = require('../models');
//GET/POST/PUT/DELETE routes
// get all posts for homepage

router.get('/', (req, res) => {
    res.render('homepage', {
        loggedIn: req.session.loggedIn 
    });   
});

router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }
    res.render('login');
  });

  router.get('/signup', (req, res) => {
    res.render('signup');
  });



module.exports = router;

