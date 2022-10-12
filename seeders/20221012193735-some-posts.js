"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "posts",
      [
        {
          userId: 1,
          postType: "photo",
          createdAt: new Date(),
          updatedAt: new Date(),
          // entryId: 1,
        },
        {
          userId: 1,
          postType: "photo",
          createdAt: new Date(),
          updatedAt: new Date(),
          //entryId: 2,
        },
        {
          userId: 2,
          postType: "photo",
          createdAt: new Date(),
          updatedAt: new Date(),
          //entryId: 3,
        },
        {
          userId: 3,
          postType: "photo",
          createdAt: new Date(),
          updatedAt: new Date(),
          // entryId: 4,
        },
        {
          userId: 4,
          postType: "photo",
          createdAt: new Date(),
          updatedAt: new Date(),
          //entryId: 5,
        },
        {
          userId: 5,
          postType: "photo",
          createdAt: new Date(),
          updatedAt: new Date(),
          //entryId: 6,
        },
        {
          userId: 3,
          postType: "restaurant",
          createdAt: new Date(),
          updatedAt: new Date(),
          //entryId: 7,
        },
        {
          userId: 1,
          postType: "restaurant",
          createdAt: new Date(),
          updatedAt: new Date(),
          //entryId: 8,
        },
        {
          userId: 4,
          postType: "restaurant",
          createdAt: new Date(),
          updatedAt: new Date(),
          // entryId: 9,
        },
        {
          userId: 5,
          postType: "restaurant",
          createdAt: new Date(),
          updatedAt: new Date(),
          //entryId: 10,
        },
        {
          userId: 2,
          postType: "restaurant",
          createdAt: new Date(),
          updatedAt: new Date(),
          //entryId: 11,
        },
        {
          userId: 1,
          postType: "news",
          createdAt: new Date(),
          updatedAt: new Date(),
          // entryId: 12,
        },
        {
          userId: 2,
          postType: "news",
          createdAt: new Date(),
          updatedAt: new Date(),
          //entryId: 13,
        },
        {
          userId: 3,
          postType: "news",
          createdAt: new Date(),
          updatedAt: new Date(),
          //entryId: 14,
        },
        {
          userId: 4,
          postType: "news",
          createdAt: new Date(),
          updatedAt: new Date(),
          //entryId: 15,
        },
        {
          userId: 5,
          postType: "news",
          createdAt: new Date(),
          updatedAt: new Date(),
          //entryId: 16,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("posts", null, {});
  },
};
