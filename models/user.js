const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class User extends Model { }

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        user_name: {
            type: dataTypes.STRING,
            allowNull: false
        },
        admin: {
            type: dataType.BOOLEAN,
            allowNull: false,
            defaultValue: false
        }

    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'user',
    }
)

module.exports = User