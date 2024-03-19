// Import Required Modules
const { Sequelize } = require('sequelize');

// Initialize Sequelize Object
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    dialect: 'mysql',
    host: process.env.DB_HOST,
    pool: {
      max: 512,
    },
    logging: Number.parseInt(process.env.SQL_LOG) === 1 ? console.log : false,
  }
);

module.exports = sequelize;
