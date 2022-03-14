const seedRecipes = require('./recipes.seeds');

sequelize = require('../config/connection')

const seedAll = async () => {
    await sequelize.sync({force: true});

    await seedRecipes();

    process.exit(0);
}

seedAll(); 