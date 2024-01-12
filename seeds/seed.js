const sequelize = require('../config/connection');
const { List, User } = require('../models');

const listSeedData = require('./listSeedData.json');
const userLoginData = require('./userLoginSeedData.json');

// seeds data from list and user
const seedDatabase = async () => {
    await sequelize.sync({ force: true });

  const lists = await List.bulkCreate(listSeedData);

  const users = await User.bulkCreate(userLoginData);

  process.exit(0);
};

seedDatabase();