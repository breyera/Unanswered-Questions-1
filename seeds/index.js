const sequelize = require('../config/connection');
const Models = require('../models');

const seedDatabase = async () => {
    await sequelize.sync({force: true});
    return Models;
};

seedDatabase();
