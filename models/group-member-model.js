// Import Required Modules
const Sequelize = require('sequelize');
const sequelize = require('../utilities/database');

// Defining County Model
const GroupMember = sequelize.define('groupMember', {
  id: {
    allowNull: false,
    autoIncrement: false,
    primaryKey: true,
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
  },
  groupId: {
    type: Sequelize.UUID,
    allowNull: true,
    defaultValue: null,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  phoneCountryCode: {
    type: Sequelize.STRING,
    allowNull: true,
    defaultValue: null,
  },
  phoneNumber: {
    type: Sequelize.STRING,
    allowNull: true,
    defaultValue: null,
  },
  emailAddress: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: true,
    defaultValue: null,
  },
  isRedeemed: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: false,
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

module.exports = GroupMember;
