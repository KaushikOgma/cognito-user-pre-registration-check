
const DocumentType = require('../../models/document-types-model');
const Roles = require('../../models/roles-model');
const UserDocument = require('../../models/user-document-model');

/**
 * Defines the user Doc Type relationship
 *
 */
exports.userDocumentTypeRelation = () => {

    DocumentType.hasMany(UserDocument, {
        as: 'userDocuments',
        key: 'id',
        foreignKey: 'documentTypeId',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      })
      DocumentType.belongsTo(Roles, {
        as: 'roles',
        key: 'id',
        foreignKey: 'roleId',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });


};
