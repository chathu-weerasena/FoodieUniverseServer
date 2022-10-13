"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class restaurant extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      restaurant.belongsTo(models.post, { foreignKey: "postId" });
    }
  }
  restaurant.init(
    {
      name: { type: DataTypes.STRING, allowNull: false },
      address: { type: DataTypes.STRING, allowNull: false },
      content: { type: DataTypes.STRING, allowNull: false },
      image: { type: DataTypes.STRING, allowNull: false },
    },
    {
      sequelize,
      modelName: "restaurant",
    }
  );
  return restaurant;
};
