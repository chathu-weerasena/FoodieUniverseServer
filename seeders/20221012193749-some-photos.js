"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "photos",
      [
        {
          title: "Rainbow dish",
          image:
            "https://imagevars.gulfnews.com/2019/02/03/SU_190204_Sri_Lanka_food_lead_resources1_16a4a1581c5_large.jpg",
          content:
            "A typical traditional Sri Lankan plate offers a good balance of food groups, with a lot of plant-based dishes and a serving of fish",
          createdAt: new Date(),
          updatedAt: new Date(),
          postId: 1,
        },
        {
          title: "Coconut Relish",

          image: "https://www.lakpura.com/images/LK94007667-06-E.JPG",
          content:
            "Being one the largest Coconut exporters in the world and of course the coconut being a staple in Sri Lankan cuisine, the traditional “Pol Sambol” (Coconut Sambol) is a must try when fulfilling your gastronomic pleasures in our paradise island.",
          createdAt: new Date(),
          updatedAt: new Date(),
          postId: 2,
        },
        {
          title: "Paella",

          image:
            "https://thekitchencommunity.org/wp-content/uploads/2022/03/5_spanish-recipes-501x750.jpg",
          content:
            "Making this dish feels like you can hear the breeze of the ocean right outside your window.",
          createdAt: new Date(),
          updatedAt: new Date(),
          postId: 3,
        },
        {
          title: "Italian Goodness",

          image:
            "https://cached.imagescaler.hbpl.co.uk/resize/scaleWidth/952/cached.offlinehbpl.hbpl.co.uk/news/OMC/Italian_food-20151028123558935.jpg",
          content:
            "Italian food has long been a popular cuisine in the UK. Here, we take a look at some of the best places to satisfy your pizza and pasta cravings.",
          createdAt: new Date(),
          updatedAt: new Date(),
          postId: 4,
        },
        {
          title: "Best Vegan Burgers",

          image:
            "https://www.greenqueen.com.hk/wp-content/uploads/2021/10/Lewis-Hamiltons-Vegan-Burger-Chain-Is-Now-Worth-70M.jpg",
          content:
            "Neat Burger, the plant-based fast-food chain co-founded by British racing champion Lewis Hamilton and Zack Bishti",
          createdAt: new Date(),
          updatedAt: new Date(),
          postId: 5,
        },
        {
          title: "Chinese Set Menu",

          image:
            "https://static.wixstatic.com/media/7d8c70_95fabb9c45e84d759839d51ef9480dee~mv2.jpg/v1/fill/w_454,h_568,fp_0.50_0.50,q_90,enc_auto/7d8c70_95fabb9c45e84d759839d51ef9480dee~mv2.jpg",
          content:
            "Ahhhh, the Sri Lankan Chinese vegetable chop suey. A delight to herbivores and omnivores alike, this is a main feature of the Sri Lankan Chinese set menu options at restaraunts —- rightly so because it is scrumptious.",
          createdAt: new Date(),
          updatedAt: new Date(),
          postId: 6,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("photos", null, {});
  },
};
