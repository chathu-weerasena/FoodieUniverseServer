"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("posts", "userId", {
      type: Sequelize.INTEGER,
      references: {
        model: "users",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
    await queryInterface.addColumn("photos", "postId", {
      type: Sequelize.INTEGER,
      references: {
        model: "posts",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
    await queryInterface.addColumn("restaurants", "postId", {
      type: Sequelize.INTEGER,
      references: {
        model: "posts",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
    await queryInterface.addColumn("news", "postId", {
      type: Sequelize.INTEGER,
      references: {
        model: "posts",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });

    await queryInterface.addColumn("comments", "postId", {
      type: Sequelize.INTEGER,
      references: {
        model: "posts",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("posts", "userId");
    await queryInterface.removeColumn("photos", "postId");
    await queryInterface.removeColumn("restaurants", "postId");
    await queryInterface.removeColumn("news", "postId");

    await queryInterface.removeColumn("comments", "postId");
  },
};
