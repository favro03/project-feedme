const router = require('express').Router();
const sequelize = require('../config/connection');
const { Recipes, User, Comment } = require('../models');
//GET/POST/PUT/DELETE routes
// get all posts for homepage

<<<<<<< HEAD
router.get('/', (req, res) => {
  
  Recipes.findAll({
    attributes: [
      'id',
      'name',
      'ingredients',
      'direction',
      'description',
      'created_at',
=======
router.get('/', (req,res) => {
  Recipes.findAll({
    attributes: [
       'id',
        'name',
        'ingredients',
        'direction',
        'description'
>>>>>>> origin/develop
    ],
    include: [
      {
        model: Comment,
<<<<<<< HEAD
        attributes: ['id', 'comment_text', 'recipes_id', 'user_id', 'created_at'],
=======
        attributes: ['id', 'comment_text', 'user_id', 'created_at'],
>>>>>>> origin/develop
        include: {
          model: User,
          attributes: ['username']
        }
<<<<<<< HEAD
      },
      {
        model: User,
        attributes: ['username']
=======
>>>>>>> origin/develop
      }
    ]
  })
    .then(dbPostData => {
<<<<<<< HEAD
      const recipes = dbPostData.map(post => post.get({ plain: true }));

      res.render('homepage', { 
        recipes,
        loggedIn: req.session.loggedIn
=======
      const Recipe = dbPostData.map(post => post.get({ plain: true }));

      res.render('homepage', {
        Recipe
>>>>>>> origin/develop
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
<<<<<<< HEAD
});
=======
})
// router.get('/', (req, res) => {
//     res.render('homepage', {
//         loggedIn: req.session.loggedIn 
//     });   
// });
>>>>>>> origin/develop

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

<<<<<<< HEAD
  router.get('/recipes/:id', (req, res) => {
=======
router.get('/recipe/:id', (req, res) => {
>>>>>>> origin/develop
    Recipes.findOne({
      where: {
        id: req.params.id
      },
      attributes: [
        'id',
        'name',
        'ingredients',
        'direction',
<<<<<<< HEAD
        'description',
        'created_at',
=======
        'description'
>>>>>>> origin/develop
      ],
      include: [
        {
          model: Comment,
<<<<<<< HEAD
          attributes: ['id', 'comment_text', 'recipes_id', 'user_id', 'created_at'],
=======
          attributes: ['id', 'comment_text', 'user_id', 'created_at'],
>>>>>>> origin/develop
          include: {
            model: User,
            attributes: ['username']
          }
<<<<<<< HEAD
        },
        {
          model: User,
          attributes: ['username']
        }
      ]
    })
      .then(dbPostData => {
        if (!dbPostData) {
          res.status(404).json({ message: 'No recipe found with this id' });
          return;
        }
        
        // serialize the data
        const recipes = dbPostData.get({ plain: true });
  
        // pass data to template
        res.render('single-recipe', { recipes, loggedIn: req.session.loggedIn });
      })
=======
        }
      ]
    })
    .then(dbPostData => {
      if (!dbPostData) {
        res.status(404).json({ message: 'No post found with this id' });
        return;
      }

      // serialize the data
      const recipe = dbPostData.get({ plain: true });

      recipe.ingredients = recipe.ingredients.split('|');

      recipe.direction = recipe.direction.split('|')

      console.log(recipe.comments)

      // pass data to template
      res.render('recipe', {
        recipe
      });
    })
>>>>>>> origin/develop
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });
<<<<<<< HEAD
=======

>>>>>>> origin/develop


module.exports = router;

