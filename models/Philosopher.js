const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class Philosopher extends Model { }

Philosopher.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        img: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        period: {
            type: DataTypes.STRING
        },
        about: {
            type: DataTypes.STRING
        },
        videoUrl: {
            type: DataTypes.STRING
        }
        //maybe make this its own model
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
<<<<<<< HEAD
<<<<<<< HEAD:models/Philosopher.js
        modelName: 'philosopher',
=======
        modelName: 'philsopher',
>>>>>>> 2c4cd936bac42e6e3a1a4e276b74dfc817cb8d1f:models/Philospher.js
=======
        modelName: 'philosopher',
>>>>>>> 1040682629195c59fe88f155bd3255d570152eca
    }
);

module.exports = Philosopher;
