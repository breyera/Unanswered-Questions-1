const sequelize = require('../config/connection');
const Models = require('../models');
const dqSeed = require('./dailyQuestionSeed');
const philSeed = require('./philosopherSeed');
const pollSeed = require('./pollSeed');

const seedDatabase = async () => {
    await sequelize.query('SET FOREIGN_KEY_CHECKS = 0');
    await sequelize.sync({ force: true });
    await sequelize.query('SET FOREIGN_KEY_CHECKS = 1');
    await dqSeed();
    await philSeed();
    await pollSeed();

    return Models;
};

seedDatabase();
