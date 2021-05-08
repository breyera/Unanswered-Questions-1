const Philosopher = require('./Philospher');
const DailyQuestion = require('./DailyQuestion');
const Quote = require('./Quote');
const Test = require('./Test');
const User = require('./User');
const Comments = require('./Comment');
<<<<<<< HEAD
=======
const Polls = require('./Polls');
>>>>>>> 989022b00555bf0fdab35d2097b5a3d36d4ae3d2

Philosopher.hasMany(Quote, {
    foreignKey: 'philosopher_id',
    //onDelete : 'CASCADE'
});

DailyQuestion.hasMany(Comments, {
    foreignKey: 'daily_id',
});

User.hasMany(Comments, {
    foreignKey: 'user_id',
});

Quote.belongsTo(Philosopher, {
    foreignKey: 'philosopher_id',
});
//have someone check this
Comments.belongsTo(DailyQuestion, {
    foreignKey: 'daily_id',
});
Comments.belongsTo(User, {
    foreignKey: 'user_id',
});

module.exports = {
    Philosopher,
    DailyQuestion,
    Quote,
    User,
<<<<<<< HEAD
    Comments, //,
=======
    Polls,
    Comments//,
>>>>>>> 989022b00555bf0fdab35d2097b5a3d36d4ae3d2
    //Test,
    // Answers
};
