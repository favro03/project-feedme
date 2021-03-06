const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', (req, res) => {
  Comment.findAll({
    attributes: [
      'id',
      'recipes_id',
      'comment_text',
      'user_id'
  ]
})
  .then(dbCommentData => res.json(dbCommentData))
  .catch(err => {
      console.log(err);
      res.status(500).json(err);
  });
});

router.post('/', withAuth, (req, res) => {
  // expects => {comment_text: "This is the comment", user_id: 1, post_id: 2}
  //to test in insomnia remove session from user_id and replace with body
  if (req.session) {
    Comment.create({
      comment_text: req.body.comment_text,
      // use the id from the session
      user_id: req.session.user_id,
      recipes_id: req.body.recipes_id
    })
      .then(dbCommentData => res.json(dbCommentData))
      .catch(err => {
        console.log(err);
        res.status(400).json(err);
      });
  }
});

router.put('/:id', withAuth, (req, res) => {
  Comment.update({
      comment_text: req.body.comment_text
      }, {
      where: {
          id: req.params.id
      }
  }).then(dbCommentData => {
      if (!dbCommentData) {
          res.status(404).json({ message: 'No comment found with this id' });
          return;
      }
      res.json(dbCommentData);
  }).catch(err => {
      console.log(err);
      res.status(500).json(err);
  });
});

router.delete('/:id', withAuth, (req, res) => {
  Comment.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(dbCommentData => {
      if (!dbCommentData) {
        res.status(404).json({ message: 'No comment found with this id!' });
        return;
      }
      res.json(dbCommentData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;