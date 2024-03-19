/**
 * A function to establish user insurance provider relations.
 */

const Users = require('../../models/users-model');
const UserInsuranceProvider = require('../../models/user-insurance-provider-model');
const InsuranceProvider = require('../../models/insurance-provider-model');

exports.userInsuranceProviderRelation = () => {



  UserInsuranceProvider.belongsTo(Users, {
        as: 'user',
        key: 'id',
        foreignKey: 'userId',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });

      UserInsuranceProvider.belongsTo(InsuranceProvider, {
        as: 'insuranceProvider',
        key: 'id',
        foreignKey: 'insuranceProviderId',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });
};
