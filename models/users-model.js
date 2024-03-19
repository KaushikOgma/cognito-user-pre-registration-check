// Import Required Modules
const Sequelize = require('sequelize');
const sequelize = require('../utilities/database');

// Defining Patients Model
const Users = sequelize.define(
  'users',
  {
    id: {
      allowNull: false,
      autoIncrement: false,
      primaryKey: true,
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
    },
    cognitoUserId: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    roleId: {
      type: Sequelize.UUID,
      allowNull: false,
    },
    officeName: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    firstName: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    lastName: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    gender: {
      type: Sequelize.ENUM,
      values: ['male', 'female', 'transgender', 'prefer-not-to-say'],
      allowNull: false,
    },
    officeLocation: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    city: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    state: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    zipcode: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    emailAddress: {
      type: Sequelize.STRING,
      allowNull: true,
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
    officePhoneCountryCode: {
      type: Sequelize.STRING,
      allowNull: true,
      defaultValue: null,
    },
    officePhoneNumber: {
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
      allowNull: true,
    },
    userSettings: {
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
    isActive: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
    rating: {
      type: Sequelize.FLOAT,
      allowNull: false,
      defaultValue: 0,
    },
    accountStatus: {
      type: Sequelize.ENUM,
      values: [
        'pending',
        'approved',
        'rejected',
        'suspended',
        'requested-for-deletion',
        'deleted',
      ],
      defaultValue: 'pending',
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
  },
  {
    indexes: [
      {
        unique: true,
        fields: ['cognitoUserId', 'emailAddress'],
      },
    ],
  }
);

module.exports = Users;
