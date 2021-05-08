const Philosopher = require('./philospher');
const DailyQuestion = require('./dailyQuestion');
const Quote = require('./quote');
const Test = require('./test')
const User = require('./user')
const Comments = require('./comment')

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
    Comments//,
    //Test,
    // Answers
};