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
      post.hasOne(models.user, { foreignKey: "userId" });
      post.hasMany(models.photo, { foreignKey: "postId" });
      post.hasMany(models.restaurant, { foreignKey: "postId" });
      post.hasMany(models.news, { foreignKey: "postId" });
      post.hasMany(models.comment, { foreignKey: "postId" });
    }
  }
  post.init(
    {
      postType: { type: DataTypes.STRING, allowNull: false },
    },
    {
      sequelize,
      modelName: "post",
    }
  );
  return post;
};
