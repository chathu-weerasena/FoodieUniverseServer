"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "posts",
      [
        {
          userId: 1,
          postType: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
          // entryId: 1,
        },
        {
          userId: 1,
          postType: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
          //entryId: 2,
        },
        {
          userId: 2,
          postType: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
          //entryId: 3,
        },
        {
          userId: 3,
          postType: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
          // entryId: 4,
        },
        {
          userId: 4,
          postType: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
          //entryId: 5,
        },
        {
          userId: 5,
          postType: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
          //entryId: 6,
        },
        {
          userId: 3,
          postType: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
          //entryId: 7,
        },
        {
          userId: 1,
          postType: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
          //entryId: 8,
        },
        {
          userId: 4,
          postType: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
          // entryId: 9,
        },
        {
          userId: 5,
          postType: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
          //entryId: 10,
        },
        {
          userId: 2,
          postType: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
          //entryId: 11,
        },
        {
          userId: 1,
          postType: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
          // entryId: 12,
        },
        {
          userId: 2,
          postType: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
          //entryId: 13,
        },
        {
          userId: 3,
          postType: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
          //entryId: 14,
        },
        {
          userId: 4,
          postType: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
          //entryId: 15,
        },
        {
          userId: 5,
          postType: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
          //entryId: 16,
        },
        {
          userId: 6,
          postType: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
          //entryId: 17,
        },
        {
          userId: 7,
          postType: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
          //entryId: 18,
        },
        {
          userId: 8,
          postType: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
          //entryId: 19,
        },
        {
          userId: 9,
          postType: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
          //entryId: 20,
        },
        {
          userId: 6,
          postType: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
          //entryId: 21,
        },
        {
          userId: 7,
          postType: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
          //entryId: 22,
        },
        {
          userId: 8,
          postType: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
          //entryId: 23,
        },
        {
          userId: 9,
          postType: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
          //entryId: 24,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("posts", null, {});
  },
};
