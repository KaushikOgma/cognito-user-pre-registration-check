/**
 * A function to establish user Speciality relations.
 */

const UserSpeciality = require('../../models/user-speciality-model');
const Users = require('../../models/users-model');
const Speciality = require('../../models/speciality-model');

exports.userSpecialityRelation = () => {



    UserSpeciality.belongsTo(Users, {
        as: 'user',
        key: 'id',
        foreignKey: 'userId',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });
      UserSpeciality.belongsTo(Speciality, {
        as: 'speciality',
        key: 'id',
        foreignKey: 'specialityId',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });
};
