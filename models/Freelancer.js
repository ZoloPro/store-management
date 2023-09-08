'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Freelancer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Freelancer.init({
    name: DataTypes.STRING,
    phone: DataTypes.STRING,
    email: DataTypes.STRING,
    birthdate: DataTypes.DATEONLY,
    gender: DataTypes.SMALLINT,
    avatar: DataTypes.STRING,
    addressLine: DataTypes.STRING,
    ward: DataTypes.STRING,
    district: DataTypes.STRING, 
    province: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Freelancer',
  });
  return Freelancer;
};