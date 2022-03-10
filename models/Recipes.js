const { Model, Datatypes } = require('sequelize');
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
            type: DataYypes.STRING,
            allowNull: false,
        },
        direction: {
            type: DataYypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataYypes.STRING,
            allowNull: false,
        }
    }
)

module.exports = Recipe;