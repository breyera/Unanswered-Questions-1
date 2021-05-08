const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

class Quote extends Model {}

Quote.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        quote: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        philosopher_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'philosopher',
                key: 'id',
            },
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'quote',
    }
)
module.exports = Quote
