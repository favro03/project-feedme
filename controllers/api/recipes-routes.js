const router = require('express').Router();
const { Recipes, User, Comment } = require('../../models');
const sequelize = require('../../config/connection');
const withAuth = require('../../utils/auth');
//GET/POST/PUT/DELETE routes

router.get('/', (req, res) => {
 
  Recipes.findAll({
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
    .then(dbPostData => res.json(dbPostData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

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
      'image_url',
      'created_at',
    ],
    include: [
      {
        model: User,
        attributes: ['username']
      },
      {
        model: Comment,
        attributes: ['id', 'comment_text', 'recipes_id', 'user_id', 'created_at'],
        include: {
          model: User,
          attributes: ['username']
        }
      }
    ]
  })
    .then(dbPostData => {
      if (!dbPostData) {
        res.status(404).json({ message: 'No recipes found with this id' });
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

  Recipes.create({
    name: req.body.name,
    ingredients: req.body.ingredients,
    direction: req.body.direction,
    description: req.body.description,
    image_url: req.body.image_url,
    user_id: req.session.user_id
  })
    .then(dbrecipeData => res.json(dbrecipeData))
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
    image_url: req.body.image_url,
    },
    {
      where: {
        id: req.params.id
      }
    }
  )
    .then(dbPostData => {
      if (!dbPostData) {
        res.status(404).json({ message: 'No recipes found with this id' });
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
        res.status(404).json({ message: 'No recipes found with this id' });
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