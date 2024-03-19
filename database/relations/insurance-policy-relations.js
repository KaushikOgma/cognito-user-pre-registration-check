
const InsurancePolicy = require('../../models/insurance-policy-model');
const Profiles = require('../../models/profiles-model');


/**
 * Defines the InsurancePolicy relationship
 *
 */
exports.insurancePolicyRelation = () => {

  InsurancePolicy.belongsTo(Profiles, {
    as: 'profile',
    key: 'id',
    foreignKey: 'profileId',
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  });
  
};