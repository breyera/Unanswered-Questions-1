const { sequelize } = require("./DailyQuestion");

const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Suggestions extends Model {}

Suggestions.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        suggestion: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'suggestions'
    }
);

module.exports = Suggestions;