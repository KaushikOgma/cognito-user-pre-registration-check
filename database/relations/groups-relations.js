/* Relations for zipcodes */
const Profiles = require('../../models/profiles-model');
const Group = require('../../models/group-model');
const GroupMember = require('../../models/group-member-model');

/**
 * Defines the relationship between Group and Profiles.
 */
exports.groupRelation = () => {
  Group.hasMany(Profiles, {
    as: 'profiles',
    key: 'id',
    foreignKey: 'groupId',
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  });

 

  Group.hasMany(GroupMember, {
    as: 'groupMembers',
    key: 'id',
    foreignKey: 'groupId',
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  });

};
