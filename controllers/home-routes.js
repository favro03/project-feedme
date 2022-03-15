const router = require('express').Router();
const sequelize = require('../config/connection');
const { Recipes, User, Comment } = require('../models');

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
      const Recipe = dbPostData.map(post => post.get({ plain: true }));

      res.render('homepage', {
        Recipe, loggedIn: req.session.loggedIn
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

router.get('/recipe/:id', (req, res) => {
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
      const recipe = dbPostData.get({ plain: true });

      recipe.ingredients = recipe.ingredients.split('|');

      recipe.direction = recipe.direction.split('|')

      console.log(recipe.comments)

      // pass data to template
      res.render('recipe', {
        recipe,  loggedIn: req.session.loggedIn
      });
    })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });



module.exports = router;