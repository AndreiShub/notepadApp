const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('myDB', 'andre', 'newpassword', {
  host: 'localhost',
  dialect: 'postgres',
});

const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connected to PostgreSQL');
  } catch (error) {
    console.error('Unable to connect to PostgreSQL:', error);
  }
};

module.exports = { sequelize, connectDB };