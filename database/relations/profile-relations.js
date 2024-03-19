const Group = require('../../models/group-model');
const InsurancePolicy = require('../../models/insurance-policy-model');
const Patients = require('../../models/patients-model');
const Profiles = require('../../models/profiles-model');
const RelationshipTypes = require('../../models/relationship-types-model');

/**
 * Defines the profile relationship
 *
 */
exports.profileRelation = () => {
  Profiles.hasMany(InsurancePolicy, {
    as: 'insurancePolicies',
    key: 'id',
    foreignKey: 'profileId',
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  });

  Profiles.belongsTo(Group, {
    as: 'group',
    key: 'id',
    foreignKey: 'groupId',
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  });

  Profiles.belongsTo(Patients, {
    as: 'patient',
    key: 'id',
    foreignKey: 'patientId',
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  });

  Profiles.belongsTo(RelationshipTypes, {
    as: 'relationshipType',
    key: 'id',
    foreignKey: 'relationTypeId',
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  });
};
