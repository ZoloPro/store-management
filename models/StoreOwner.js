'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class StoreOwner extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  StoreOwner.init({
    name: DataTypes.STRING,
    phone: DataTypes.STRING,
    email: DataTypes.STRING,
    birthdate: DataTypes.DATEONLY,
    avatar: DataTypes.STRING,
    password: DataTypes.STRING,
    emailVerifiedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'StoreOwner',
    defaultScope: {
      attributes: {
        exclude: ['password'],
      }
    },
    scopes: {
      auth:{}
    }
  });
  return StoreOwner;
};