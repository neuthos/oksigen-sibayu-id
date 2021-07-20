'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class StoreDetail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // models.StoreDetail.hasMany(models.Store, {
      //   foreignKey: "id"
      // });
      // models.StoreDetail.hasOne(models.OperationHour, {
      //   foreignKey: "id"
      // });
      // models.StoreDetail.hasMany(models.Regencies, {
      //   foreignKey: "id"
      // });

      // models.StoreDetail.belongsToMany(models.Store, {
      //   through: models.Store,
      //   foreignKey: "id",
      // });

      // models.StoreDetail.belongsToMany(models.OperationHour, {
      //   through: models.Store,
      //   foreignKey: "id",
      // });

      // models.StoreDetail.belongsToMany(models.Regencies, {
      //   through: models.Store,
      //   foreignKey: "id",
      // });
    }
  };
  StoreDetail.init({
    storeId: DataTypes.INTEGER,
    operationHourId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'StoreDetail',
  });
  return StoreDetail;
};