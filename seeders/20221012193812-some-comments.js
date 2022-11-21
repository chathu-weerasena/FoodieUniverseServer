"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "comments",
      [
        {
          content: "My goodness the combo looks fabb!",
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 4,
          postId: 1,
        },
        {
          content: "Amazing meal. Mouthwatering",
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 3,
          postId: 1,
        },
        {
          content: "Can you send me some to New Jersey",
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 6,
          postId: 2,
        },
        {
          content: "Looks so good!",
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 8,
          postId: 2,
        },
        {
          content: "Would love to follow for recipes!",
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 7,
          postId: 3,
        },
        {
          content: "Looks Delicious!",
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 5,
          postId: 3,
        },
        {
          content: "A favourite of mine..looks so good!",
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 1,
          postId: 4,
        },
        {
          content: "my mother always used to make the recipe. !",
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 2,
          postId: 4,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("comments", null, {});
  },
};
