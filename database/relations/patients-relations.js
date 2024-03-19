/* Relations for patients */
const Patients = require('../../models/patients-model');
const Profiles = require('../../models/profiles-model');
const Roles = require('../../models/roles-model');

/**
 * Defines the relation between Patients and Profiles, establishing a one-to-many relationship.
 *
 */
exports.patientsRelation = () => {
  Patients.hasMany(Profiles, {
    as: 'profiles',
    key: 'id',
    foreignKey: 'patientId',
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  });

  Patients.belongsTo(Roles, {
    as: 'role',
    key: 'id',
    foreignKey: 'roleId',
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  });
};
