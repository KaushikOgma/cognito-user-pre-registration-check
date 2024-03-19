// Import Required Modules
const Sequelize = require('sequelize');
const sequelize = require('../utilities/database');

// Defining Regions Model
const InsurancePolicy = sequelize.define('insurancePolicy', {
  id: {
    allowNull: false,
    autoIncrement: false,
    primaryKey: true,
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
  },
  profileId: {
    type: Sequelize.UUID,
    allowNull: false,
  },
  memberId: {
    type: Sequelize.UUID,
    allowNull: false,
  },
  providerName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  number: {
    type: Sequelize.STRING,
    allowNull: false,
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

module.exports = InsurancePolicy;