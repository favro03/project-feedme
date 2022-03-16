const router = require('express').Router();
const sequelize = require('../config/connection');
const { Recipes, User, Comment } = require('../models');
const withAuth = require('../utils/auth');
//GET/POST/PUT/DELETE routes
// get all posts for dashboard
router.get('/', withAuth, (req,res) => {
  Recipes.findAll({
    where: {
      user_id: req.session.user_id
    },
    attributes: [
       'id',
        'name',
        'ingredients',
        'direction',
        'description',
        'created_at'
    ],
    include: [
      {
        model: Comment,
        attributes: ['id', 'comment_text', 'recipes_id', 'user_id', 'created_at'],
        include: {
          model: User,
          attributes: ['username']
        }
      },
      {model: User,
      attributes: ['username']
    }
    ]
  })
    .then(dbPostData => {
      const recipes = dbPostData.map(recipes => recipes.get({ plain: true }));

      res.render('dashboard', {
        recipes, loggedIn: true
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
})

router.get('/edit/:id', withAuth, (req, res) => {
  Recipes.findByPk(req.params.id, {
    attributes: [
        'id',
        'name',
        'ingredients',
        'direction',
        'description',
        'created_at',
    ],
    include: [
      {
        model: Comment,
        attributes: ['id', 'comment_text', 'recipes_id', 'user_id', 'created_at'],
        include: {
          model: User,
          attributes: ['username']
        }
      },
      {
        model: User,
        attributes: ['username']
      }
    ]
  })
    .then(dbPostData => {
      if (dbPostData) {
        const recipes = dbPostData.get({ plain: true });
        
        res.render('edit-recipes', {
          recipes,
          loggedIn: true
        });
      } else {
        res.status(404).end();
      }
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

router.get('/new', (req, res) => {
  res.render('new-recipes');
});


module.exports = router;