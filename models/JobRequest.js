'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class JobRequest extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  JobRequest.init({
    storeId: DataTypes.INTEGER,
    freelancerId: DataTypes.INTEGER,
    type: DataTypes.SMALLINT,
    status: DataTypes.SMALLINT
  }, {
    sequelize,
    modelName: 'JobRequest',
  });
  return JobRequest;
};