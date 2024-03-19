// Import All Models
const { rolesRelation } = require('./relations/role-relations');
const { patientsRelation } = require('./relations/patients-relations');
const {
  relationshipTypesRelation,
} = require('./relations/relationship-types-relations');
const { regionsRelation } = require('./relations/regions-relations');
const { groupRelation } = require('./relations/groups-relations');
const { userRegionsRelation } = require('./relations/user-region-relations');
const { profileRelation } = require('./relations/profile-relations');
const { groupMemberRelation } = require('./relations/group-member-relations');
const { insurancePolicyRelation } = require('./relations/insurance-policy-relations');
const { userRelation } = require('./relations/user-relations');
const { zipCodesRelation } = require('./relations/zipcodes-relations');
const { userInsuranceProviderRelation } = require('./relations/user-insurance-provider-relation');
const { userSpecialityRelation } = require('./relations/user-speciality-relation');
const { insuranceProviderRelation } = require('./relations/insurance-provider-relation');
const { specialityRelation } = require('./relations/speciality-relations');
const { userDocumentTypeRelation } = require('./relations/document-type-relation');
const { userDocumentRelation } = require('./relations/user-document-relation');
const { userVideoRelation } = require('./relations/user-video-relation');
const { userVideoTypeRelation } = require('./relations/video-type-relation');


class InitializeRelations {
  // Initialize Model Relations
  static async initializeRelations() {
    rolesRelation();
    patientsRelation();
    relationshipTypesRelation();
    regionsRelation();
    groupRelation();
    userRegionsRelation();
    profileRelation();
    groupMemberRelation();
    insurancePolicyRelation();
    userRelation();
    zipCodesRelation();
    userInsuranceProviderRelation();
    userSpecialityRelation();
    insuranceProviderRelation();
    specialityRelation();
    userDocumentTypeRelation();
    userDocumentRelation();
    userVideoRelation();
    userVideoTypeRelation();


    console.log('Database Relationship Defined');
  }
}

module.exports = InitializeRelations;
