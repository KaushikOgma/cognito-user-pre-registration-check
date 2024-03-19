/**
 * A function to establish user relations.
 */
const Role = require('../../models/roles-model');
const UserDocument = require('../../models/user-document-model');
const UserInsuranceProvider = require('../../models/user-insurance-provider-model');
const UserRegion = require('../../models/user-region-model');
const UserSpeciality = require('../../models/user-speciality-model');
const UserVideo = require('../../models/user-video-model');
const Users = require('../../models/users-model');

exports.userRelation = () => {

  // User Relations
  Users.belongsTo(Role, {
    as: 'role',
    key: 'id',
    foreignKey: 'roleId',
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  });
  Users.hasMany(UserRegion, {
    as: 'userRegions',
    key: 'id',
    foreignKey: 'userId',
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  })
  Users.hasMany(UserInsuranceProvider, {
    as: 'userInsuranceProviders',
    key: 'id',
    foreignKey: 'userId',
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  })
  Users.hasMany(UserSpeciality, {
    as: 'userSpecialities',
    key: 'id',
    foreignKey: 'userId',
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  })
  Users.hasMany(UserVideo, {
    as: 'userVideos',
    key: 'id',
    foreignKey: 'userId',
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  })
  Users.hasMany(UserDocument, {
    as: 'userDocuments',
    key: 'id',
    foreignKey: 'userId',
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  })
};
