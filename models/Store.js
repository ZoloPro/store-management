'use strict';
const {
 Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Store extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Store.init({
    storeOwnerId: DataTypes.INTEGER,
    name: DataTypes.STRING,
    logo: DataTypes.STRING,
    addressLine: DataTypes.STRING,
    ward: DataTypes.STRING,
    district: DataTypes.STRING,
    province: DataTypes.STRING,
    phone: DataTypes.STRING,
    email: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Store',
  });
  return Store;
};