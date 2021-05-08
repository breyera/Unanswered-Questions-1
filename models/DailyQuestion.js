const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class DailyQuestion extends Model {}

DailyQuestion.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },

        question: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        //add a boolean for if its already been posted?
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'daily_question',
    }
<<<<<<< HEAD:models/dailyQuestion.js
);
module.exports = DailyQuestion;
=======
)
module.exports = DailyQuestion
>>>>>>> 989022b00555bf0fdab35d2097b5a3d36d4ae3d2:models/DailyQuestion.js
