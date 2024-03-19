/**
 * A function to establish Speciality relations.
 */

const UserSpeciality = require("../../models/user-speciality-model");
const Speciality = require("../../models/speciality-model");

exports.specialityRelation = () => {
    Speciality.hasMany(UserSpeciality, {
        as: 'UserSpecialities',
        key: 'id',
        foreignKey: 'specialityId',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      })
};
