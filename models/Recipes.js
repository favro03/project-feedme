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
            type: DataTypes.TEXT,
            allowNull: false,
        },
        direction: {
            type: DataTypes.TEXT,
            allowNull: false,
            defaultValue: 'test'
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
