const RelationShipTypes = require('../../models/relationship-types-model');
const Profiles = require('../../models/profiles-model');

/**
 * Establishes a has-many relationship between RelationShipTypes and Profiles, and a belongs-to relationship between Profiles and RelationShipTypes.
 *
 */
exports.relationshipTypesRelation = () => {
  RelationShipTypes.hasMany(Profiles, {
    as: 'profiles',
    key: 'id',
    foreignKey: 'relationTypeId',
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  });

 
};
