
const DocumentType = require('../../models/document-types-model');
const UserDocument = require('../../models/user-document-model');
const User = require('../../models/users-model');

/**
 * Defines the user Document relationship
 *
 */
exports.userDocumentRelation = () => {

  UserDocument.belongsTo(User, {
    as: 'user',
    key: 'id',
    foreignKey: 'userId',
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  });
  UserDocument.belongsTo(DocumentType, {
    as: 'documentType',
    key: 'id',
    foreignKey: 'documentTypeId',
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  });
  


};
