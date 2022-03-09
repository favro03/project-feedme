// import all models
const Recipes = require('./Recipes');
const User = require('./User');
const Comment = require('./Comment');

Comment.belongsTo(User, {
    foreignKey: 'user_id'
});
User.hasMany(Comment, {
    foreignKey: 'user_id'
});
  

module.exports = { User, Recipes, Comment};