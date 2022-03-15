const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Recipes, User, Comment} = require('../../models');
const withAuth = require('../../utils/auth');


// get all users
router.get('/', (req,res) => {
  Recipes.findAll({
    attributes: [
       'id',
        'name',
        'ingredients',
        'direction',
        'description'
    ],
    include: [
      {
        model: Comment,
        attributes: ['id', 'comment_text', 'user_id', 'created_at'],
        include: {
          model: User,
          attributes: ['username']
        }
      }
    ]
  })
    .then(dbPostData => {
      const Recipe = dbPostData.map(post => post.get({ plain: true }));

      res.render('homepage', {
        Recipe
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
})
 


router.get('/:id', (req, res) => {
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
      res.json(dbPostData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post('/', withAuth, (req, res) => {
  // expects {name, ingredients, direction, description, user_id: 1}
  Recipes.create({
    name: req.body.name,
    ingredients: req.body.ingredients,
    direction: req.body.direction,
    description: req.body.description,
    user_id: req.session.user_id
  })
    .then(dbPostData => res.json(dbPostData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});


router.put('/:id', withAuth, (req, res) => {
  Recipes.update(
    {
      name: req.body.name,
      ingredients: req.body.ingredients,
      direction: req.body.direction,
      description: req.body.description,
    },
    {
      where: {
        id: req.params.id
      }
    }
  )
    .then(dbPostData => {
      if (!dbPostData) {
        res.status(404).json({ message: 'No post found with this id' });
        return;
      }
      res.json(dbPostData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete('/:id', withAuth, (req, res) => {
  console.log('id', req.params.id);
  Recipes.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(dbPostData => {
      if (!dbPostData) {
        res.status(404).json({ message: 'No recipe found with this id' });
        return;
      }
      res.json(dbPostData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;