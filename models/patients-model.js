// Import Required Modules
const Sequelize = require('sequelize');
const sequelize = require('../utilities/database');

// Defining Patients Model
const Patients = sequelize.define(
  'patients',
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
      allowNull: false,
    },
    emailAddress: {
      type: Sequelize.STRING,
      allowNull: false,
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

module.exports = Patients;
