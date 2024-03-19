/* Relations for zipcodes */
const Regions = require('../../models/regions-model');
const ZipCodes = require('../../models/zipcodes-model');

/**
 * Defines the relationship of zipcodes
 */
exports.zipCodesRelation = () => {
  ZipCodes.belongsTo(Regions, {
    as: 'region',
    key: 'id',
    foreignKey: 'regionId',
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  });
};
