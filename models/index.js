<<<<<<< HEAD
const Recipe = require('./Recipes')

module.exports = {Recipe}
=======
const Recipes = require('./Recipes')
const User = require('./User')
const Comment = require('./Comment')

// create associations for posts to user
User.hasMany(Recipes, {
    foreignKey: 'user_id'
  });
  
  Recipes.belongsTo(User, {
    foreignKey: 'user_id'
  });
      
  Comment.belongsTo(User, {
    foreignKey: 'user_id'
  });
  
  Comment.belongsTo(Recipes, {
    foreignKey: 'recipes_id'
  });
  
  User.hasMany(Comment, {
    foreignKey: 'user_id'
  });
  
  Recipes.hasMany(Comment, {
    foreignKey: 'recipes_id'
  });

module.exports = {Recipes, User, Comment}
>>>>>>> develop
