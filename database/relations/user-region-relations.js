const Regions = require('../../models/regions-model');
const UserRegion = require('../../models/user-region-model');
const User = require('../../models/users-model');

/**
 * Defines the userRegions relationship
 *
 */
exports.userRegionsRelation = () => {

  UserRegion.belongsTo(User, {
    as: 'user',
    key: 'id',
    foreignKey: 'userId',
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  });
  

  UserRegion.belongsTo(Regions, {
    as: 'region',
    key: 'id',
    foreignKey: 'regionId',
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  });
};
