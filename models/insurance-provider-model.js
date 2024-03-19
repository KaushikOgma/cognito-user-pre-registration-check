// Import Required Modules
const Sequelize = require('sequelize');
const sequelize = require('../utilities/database');

// Defining Regions Model
const InsuranceProvider = sequelize.define('insuranceProvider', {
  id: {
    allowNull: false,
    autoIncrement: false,
    primaryKey: true,
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  code: {
    type: Sequelize.STRING,
    allowNull: true,
    defaultValue: null,
  },
  contact: {
    type: Sequelize.STRING,
    allowNull: true,
    defaultValue: null,
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: true,
    defaultValue: null,
  },
  isActive: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: true,
  },
  createdAt: {
    allowNull: false,
    defaultValue: Sequelize.fn('now'),
    type: Sequelize.DATE,
  },
  updatedAt: {
    allowNull: false,
    defaultValue: Sequelize.fn('now'),
    type: Sequelize.DATE,
  },
});

module.exports = InsuranceProvider;