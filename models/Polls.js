const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class Polls extends Model { }

Polls.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true

        },
        poll_name: {
            type: DataTypes.STRING,

        },
        poll_text: {
            type: DataTypes.STRING,
            allowNull: false
        },
        vote_yes: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        },
        vote_no: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        }

    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'polls',
    }
)

module.exports = Polls;
