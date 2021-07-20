'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Province extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Province.hasMany(models.Regency, {
        foreignKey: "provinceId",
        as:"regencies"
      });
    }
  };
  Province.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Province',
  });
  return Province;
};