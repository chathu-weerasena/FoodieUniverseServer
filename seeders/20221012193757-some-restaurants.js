"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "restaurants",
      [
        {
          name: "Humphrey's Restaurant Utrecht",
          address: "Stadhuisbrug 3, 3511 KP Utrecht",
          content:
            "Absolutely love the atmosphere, the service and the most importantly the food!",
          image:
            "https://www.humphreys.nl/mysite/modules/SFIL0100/images/303_humphreys_restaurant_utrecht_5.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
          postId: 7,
        },
        {
          name: "Restaurant Zaza's",
          address: "Daniël Stalpertstraat 103, 1072 XD Amsterdam",
          content:
            "Elevated takes on scallops, shrimp & rib eye, served in a sophisticated, intimate dining room.",
          image:
            "https://zazas.nl/wp-content/uploads/2021/08/21B972FC-E317-4C22-B7DD-85D621FE62EB-e1628000048106-914x1024.jpeg",
          createdAt: new Date(),
          updatedAt: new Date(),
          postId: 8,
        },
        {
          name: "Restaurant Bougainville",
          address: "Dam 27, 1012 JS Amsterdam",
          content:
            "High-end venue in Hotel TwentySeven, preparing avant-garde meat & seafood plates, plus sake & wine.",
          image:
            "https://media-cdn.tripadvisor.com/media/photo-f/18/58/3a/b9/dam-square.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
          postId: 9,
        },
        {
          name: "Water Tower (WT) Urban Kitchen",
          address: "Heuveloord 25a, 3523 CK Utrecht",
          content:
            "Unique tri-level eatery in a former water tower offering a modern tasting menu & a robust wine list.",
          image:
            "https://media-cdn.tripadvisor.com/media/photo-s/16/86/8a/2a/interior.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
          postId: 10,
        },
        {
          name: "Restaurant Zuiver Utrecht",
          address: "Krommewetering 51, 3543 AM Utrecht",
          content:
            "Went here for lunch, without checking the menu. Noticed they have no vegan options.",
          image:
            "https://media-cdn.tripadvisor.com/media/photo-s/0a/87/9f/87/the-outside-of-restaurant.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
          postId: 11,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("restaurants", null, {});
  },
};
