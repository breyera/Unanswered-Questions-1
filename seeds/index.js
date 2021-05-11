const sequelize = require('../config/connection');
const Models = require('../models');

const seedDatabase = async () => {
    await sequelize.query('SET FOREIGN_KEY_CHECKS = 0');
    await sequelize.sync({ force: true });
    await sequelize.query('SET FOREIGN_KEY_CHECKS = 1');
    return Models;
};

seedDatabase();
