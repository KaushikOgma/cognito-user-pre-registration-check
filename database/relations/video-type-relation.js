
const Roles = require('../../models/roles-model');
const UserVideo = require('../../models/user-video-model');
const VideoType = require('../../models/video-types-model');
/**
 * Defines the user Video Type relationship
 *
 */
exports.userVideoTypeRelation = () => {

    VideoType.hasMany(UserVideo, {
        as: 'userVideos',
        key: 'id',
        foreignKey: 'videoTypeId',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      })
  
      VideoType.belongsTo(Roles, {
        as: 'roles',
        key: 'id',
        foreignKey: 'roleId',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });

};
