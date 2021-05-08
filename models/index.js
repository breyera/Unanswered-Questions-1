const Philosopher = require('./Philospher');
const DailyQuestion = require('./DailyQuestion');
const Quote = require('./Quote');
const Test = require('./Test');
const User = require('./User');
const Comments = require('./Comment');
const Polls = require('./Polls');

Philosopher.hasMany(Quote, {
    foreignKey: 'philosopher_id',
    //onDelete : 'CASCADE'
})

DailyQuestion.hasMany(Comments, {
    foreignKey: 'daily_id'
})

User.hasMany(Comments, {
    foreignKey: 'user_id'
})

Quote.belongsTo(Philosopher, {
    foreignKey: 'philosopher_id'
})
//have someone check this
Comments.belongsTo(DailyQuestion, {
    foreignKey: 'daily_id'

})
Comments.belongsTo(User, {
    foreignKey: 'user_id'
})


module.exports = {
    Philosopher,
    DailyQuestion,
    Quote,
    User,
    Polls,
    Comments//,
    //Test,
    // Answers
};