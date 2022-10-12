"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "news",
      [
        {
          title: "Wine Deals",
          address: "Juan Grisstraat-44,1328KA,Almere",
          content:
            "Albert Heijn has new winde collection and has discounts for most of them. Worth checking it out",
          endDate: "2022-10-30",
          createdAt: new Date(),
          updatedAt: new Date(),
          postId: 12,
        },
        {
          title: "Buy two and pay for one",
          address: "Brusselplein-15,3541CH,Utrecht",
          content: "Fresh Ravioli deals are available in coming weekend",
          endDate: "2022-10-23",
          createdAt: new Date(),
          updatedAt: new Date(),
          postId: 13,
        },
        {
          title: "Biologic baby food",
          address: "Oude Molenweg-3b, 3941ZL,Doorn",
          content: "New variety of bio baby food are available in the shop",
          endDate: "2022-10-25",
          createdAt: new Date(),
          updatedAt: new Date(),
          postId: 14,
        },
        {
          title: "Romantic dinner in Utrecht city center",
          address: "Oudegracht aan de Werf-143,3511AJ,Utrecht",
          content:
            "If you are living in Utrecht, this restaurant is ideal for romantic dinners. Staff is very friendy and they have an excellent menu",
          endDate: "2022-12-31",
          createdAt: new Date(),
          updatedAt: new Date(),
          postId: 15,
        },
        {
          title: "Tapas and good wine",
          address: "Spuistraat-299,1012VS,Amsterdam",
          content:
            "This tapas bar serves amazing collection and always paired with good wine",
          endDate: "2022-12-15",
          createdAt: new Date(),
          updatedAt: new Date(),
          postId: 16,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("news", null, {});
  },
};
