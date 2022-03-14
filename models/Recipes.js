const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Recipe extends Model {}

Recipe.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        ingredients: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        direction: {
<<<<<<< HEAD
            type: DataTypes.TEXT,
=======
            type: DataTypes.STRING,
>>>>>>> develop
            allowNull: false,
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
    },
    {
     sequelize,
     freezeTableName: true,
     underscored: true,
     modelName: 'recipes'
    }
);

module.exports = Recipe;
