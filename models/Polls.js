const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class Polls extends Model {}

Polls.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        poll_name: {
            type: dataTypes.STRING,
        },
        poll_text: {
            type: dataTypes.STRING,
            allowNull: false,
        },
        vote_yes: {
            type: dataTypes.INTEGER,
            defaultValue: 0,
        },
        vote_no: {
            type: dataTypes.INTEGER,
            defaultValue: 0,
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'polls',
    }
<<<<<<< HEAD:models/polls.js
);
=======
)

module.exports = Polls;
>>>>>>> 989022b00555bf0fdab35d2097b5a3d36d4ae3d2:models/Polls.js
