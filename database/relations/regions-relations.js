const Regions = require('../../models/regions-model');
const UserRegion = require('../../models/user-region-model');
const ZipCodes = require('../../models/zipcodes-model');

/**
 * Defines the relationship between the Regions and ZipCodes models.
 *
 */
exports.regionsRelation = () => {
  Regions.hasMany(ZipCodes, {
    as: 'zipCodes',
    key: 'id',
    foreignKey: 'regionId',
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  });

  Regions.hasMany(UserRegion, {
    as: 'userRegions',
    key: 'id',
    foreignKey: 'regionId',
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  })

};
