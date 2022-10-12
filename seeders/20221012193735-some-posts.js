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
          entryId: 1,
        },
        {
          userId: 1,
          postType: "photo",
          entryId: 2,
        },
        {
          userId: 2,
          postType: "photo",
          entryId: 3,
        },
        {
          userId: 3,
          postType: "photo",
          entryId: 4,
        },
        {
          userId: 4,
          postType: "photo",
          entryId: 5,
        },
        {
          userId: 5,
          postType: "photo",
          entryId: 6,
        },
        {
          userId: 3,
          postType: "restaurant",
          entryId: 7,
        },
        {
          userId: 1,
          postType: "restaurant",
          entryId: 8,
        },
        {
          userId: 4,
          postType: "restaurant",
          entryId: 9,
        },
        {
          userId: 5,
          postType: "restaurant",
          entryId: 10,
        },
        {
          userId: 2,
          postType: "restaurant",
          entryId: 11,
        },
        {
          userId: 1,
          postType: "news",
          entryId: 12,
        },
        {
          userId: 2,
          postType: "news",
          entryId: 13,
        },
        {
          userId: 3,
          postType: "news",
          entryId: 14,
        },
        {
          userId: 4,
          postType: "news",
          entryId: 15,
        },
        {
          userId: 5,
          postType: "news",
          entryId: 16,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("posts", null, {});
  },
};
