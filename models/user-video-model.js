// Import Required Modules
const Sequelize = require('sequelize');
const sequelize = require('../utilities/database');


// Defining User Video Model
const UserVideo = sequelize.define('userVideos', {
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
  description: {
    type: Sequelize.TEXT,
    allowNull: true,
    defaultValue: null,
  },
  videoTypeId: {
    type: Sequelize.UUID,
    allowNull: false,
  },
  userId: {
    type: Sequelize.UUID,
    allowNull: false,
  },
  mimeType: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  duration: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  filePath: {
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
});

module.exports = UserVideo;
