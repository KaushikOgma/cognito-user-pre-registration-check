/* Relations for group members */

const Group = require('../../models/group-model');
const GroupMember = require('../../models/group-member-model');

/**
 * Defines the relationship of group members
 */
exports.groupMemberRelation = () => {

  GroupMember.belongsTo(Group, {
    as: 'group',
    key: 'id',
    foreignKey: 'groupId',
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  });
};
