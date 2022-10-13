"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      post.belongsTo(models.user, { foreignKey: "userId" });
      post.hasOne(models.photo, { foreignKey: "postId" });
      post.hasOne(models.restaurant, { foreignKey: "postId" });
      post.hasOne(models.news, { foreignKey: "postId" });
      post.hasMany(models.comment, { foreignKey: "postId" });
    }
  }
  post.init(
    {
      postType: { type: DataTypes.SMALLINT, allowNull: false },
    },
    {
      sequelize,
      modelName: "post",
    }
  );
  return post;
};
