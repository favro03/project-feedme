const seedRecipes = require('./recipes-seeds');
const seedUsers = require('./user-seeds');
const seedComments = require('./comment-seeds')

sequelize = require('../config/connection')

const seedAll = async () => {
    await sequelize.sync({force: true});
    console.log('--------------');
    await seedUsers();
    console.log('--------------');
  
    await seedRecipes();
    console.log('--------------');
  
    await seedComments();
    console.log('--------------');

    process.exit(0);
}

seedAll(); 