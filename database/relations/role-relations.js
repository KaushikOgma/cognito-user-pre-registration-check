/**
 * A function to establish role and patient relations.
 */
const Role = require('../../models/roles-model');
const Patients = require('../../models/patients-model');
const Users = require('../../models/users-model');
const VideoType = require('../../models/video-types-model');
const DocumentType = require('../../models/document-types-model');

exports.rolesRelation = () => {
  // Role Relations
  Role.hasMany(Patients, {
    as: 'patients',
    key: 'id',
    foreignKey: 'roleId',
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  });

  
  Role.hasMany(Users, {
    as: 'users',
    key: 'id',
    foreignKey: 'roleId',
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  });
  Role.hasMany(VideoType, {
    as: 'videoTypes',
    key: 'id',
    foreignKey: 'roleId',
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  })
  Role.hasMany(DocumentType, {
    as: 'documentTypes',
    key: 'id',
    foreignKey: 'roleId',
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  })
};
