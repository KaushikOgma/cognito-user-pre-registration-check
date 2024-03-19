/**
 * A function to establish insurance provider relations.
 */

const InsuranceProvider = require("../../models/insurance-provider-model");
const UserInsuranceProvider = require("../../models/user-insurance-provider-model");




exports.insuranceProviderRelation = () => {

    InsuranceProvider.hasMany(UserInsuranceProvider, {
        as: 'userInsuranceProviders',
        key: 'id',
        foreignKey: 'insuranceProviderId',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      })


};