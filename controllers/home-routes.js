const router = require('express').Router();
const sequelize = require('../config/connection')
const { Recipes, User, Comment } = require('../models');
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })

//GET/POST/PUT/DELETE routes
// get all posts for homepage

router.get('/', (req,res) => {
  Recipes.findAll({
    attributes: [
       'id',
        'name',
        'ingredients',
        'direction',
        'description',
        'image_url',
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

      res.render('homepage', {
        recipes, loggedIn: req.session.loggedIn
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
})
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

router.get('/recipes/:id', (req, res) => {
    Recipes.findOne({
      where: {
        id: req.params.id
      },
      attributes: [
        'id',
        'name',
        'ingredients',
        'direction',
        'description',
        'image_url',
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
      if (!dbPostData) {
        res.status(404).json({ message: 'No recipes found with this id' });
        return;
      }

      // serialize the data
      const recipes = dbPostData.get({ plain: true });

      recipes.ingredients = recipes.ingredients.split('|');

      recipes.direction = recipes.direction.split('|')

      console.log(recipes.comments)

      // pass data to template
      res.render('recipes', {
        recipes,  
        loggedIn: req.session.loggedIn
      });
    })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });



module.exports = router;