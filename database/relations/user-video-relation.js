
const UserVideo = require('../../models/user-video-model');
const User = require('../../models/users-model');
const VideoType = require('../../models/video-types-model');
/**
 * Defines the user Viddeo relationship
 *
 */
exports.userVideoRelation = () => {

  UserVideo.belongsTo(User, {
    as: 'user',
    key: 'id',
    foreignKey: 'userId',
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  });
  UserVideo.belongsTo(VideoType, {
    as: 'videoType',
    key: 'id',
    foreignKey: 'videoTypeId',
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  });
  


};
