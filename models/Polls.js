const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class Polls extends Model { }

Polls.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        poll_name: {
            type: DataTypes.STRING,
<<<<<<< HEAD
<<<<<<< HEAD
        },
        poll_text: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        vote_yes: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
        },
        vote_no: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
        },
=======

=======
>>>>>>> 1040682629195c59fe88f155bd3255d570152eca
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
<<<<<<< HEAD
            defaultValue: 0
        }

>>>>>>> 2c4cd936bac42e6e3a1a4e276b74dfc817cb8d1f
=======
            defaultValue: 0,
        },
>>>>>>> 1040682629195c59fe88f155bd3255d570152eca
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'polls',
    }
);

module.exports = Polls;
