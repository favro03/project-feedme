const { Comment } = require('../models');

const commentData = [
    {
        comment_text: 'This stew if so good',
        user_id: 1,
        recipes_id: 1
      },
      {
        comment_text: 'This recipe was easy to make',
        user_id: 2,
        recipes_id: 1
      },
      {
        comment_text: 'I recommend everyone to try it',
        user_id: 1,
        recipes_id: 1
      },
      {
        comment_text: 'This was a little complicated but it came out well',
        user_id: 3,
        recipes_id: 2
      },
      {
        comment_text: 'This is pretty good recipe',
        user_id: 1,
        recipes_id: 2
      },
      {
        comment_text: 'This recipe is the best recipe I have tried',
        user_id: 4,
        recipes_id: 2
      },
      {
        comment_text: 'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.',
        user_id: 3,
        recipes_id: 2
      }
    ];

    const seedComments = () => Comment.bulkCreate(commentData);

    module.exports = seedComments;