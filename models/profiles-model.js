// Import Required Modules
const Sequelize = require('sequelize');
const sequelize = require('../utilities/database');

// Defining Profiles Model
const Profiles = sequelize.define('profiles', {
  id: {
    allowNull: false,
    autoIncrement: false,
    primaryKey: true,
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
  },
  patientId: {
    type: Sequelize.UUID,
    allowNull: false,
  },
  relationTypeId: {
    type: Sequelize.UUID,
    allowNull: false,
  },
  groupId: {
    type: Sequelize.UUID,
    allowNull: true,
    defaultValue: null,
  },
  zipCode: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  location: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  firstName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  gender: {
    type: Sequelize.ENUM,
    values: ['male', 'female', 'transgender', 'prefer-not-to-say'],
    allowNull: false,
  },
  emailAddress: {
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
  profileImagePath: {
    type: Sequelize.STRING,
    allowNull: true,
    defaultValue: null,
  },
  
  dob: {
    type: Sequelize.DATEONLY,
    allowNull: false,
  },
  profileSettings: {
    type: Sequelize.JSON,
    defaultValue: {
      isAvailable: false,
    },
  },
  locationSettings: {
    type: Sequelize.JSON,
    defaultValue: {
      isAvailable: false,
    },
  },
  selfPay: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
  isDeleted: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: false,
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
  deletedAt: {
    allowNull: true,
    defaultValue: null,
    type: Sequelize.DATE,
  },
});

module.exports = Profiles;
