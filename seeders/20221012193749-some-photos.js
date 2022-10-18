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
            "This is a meal I made earlier this year for two dear friends. Life got in the way and I forgot that this meal was even made, until I stumbled upon the photos recently.",
          createdAt: new Date(),
          updatedAt: new Date(),
          postId: 1,
        },
        {
          title: "Coconut Relish",

          image: "https://www.lakpura.com/images/LK94007667-06-E.JPG",
          content:
            "I’m yet to meet someone that has tried pol sambola for the first time and not liked it. It’s basically flavoured, spiced scraped coconut but with the best flavour you can possibly imagine? ",
          createdAt: new Date(),
          updatedAt: new Date(),
          postId: 2,
        },
        {
          title: "Paella",

          image:
            "https://thekitchencommunity.org/wp-content/uploads/2022/03/5_spanish-recipes-501x750.jpg",
          content: "Doncs ja ho tenim avui…:Paella de tardor!",
          createdAt: new Date(),
          updatedAt: new Date(),
          postId: 3,
        },
        {
          title: "Italian Goodness",

          image:
            "https://cached.imagescaler.hbpl.co.uk/resize/scaleWidth/952/cached.offlinehbpl.hbpl.co.uk/news/OMC/Italian_food-20151028123558935.jpg",
          content:
            "Creamy Tomato Ravioli Sauce - Upgrade that store-bought ravioli to something you'd get at a restaurant with this rich and creamy tomato ravioli sauce with spinach and parmesan.",
          createdAt: new Date(),
          updatedAt: new Date(),
          postId: 4,
        },
        {
          title: "Best Vegan Burgers",

          image:
            "https://www.greenqueen.com.hk/wp-content/uploads/2021/10/Lewis-Hamiltons-Vegan-Burger-Chain-Is-Now-Worth-70M.jpg",
          content:
            "KUUUUUUR, who’s hungry?. This is your sign to go DOUBLE DOUBLE and dunk your burger into a cheesy pot of planet-friendly perfection ",
          createdAt: new Date(),
          updatedAt: new Date(),
          postId: 5,
        },
        {
          title: "Chinese Set Menu",

          image:
            "https://static.wixstatic.com/media/7d8c70_95fabb9c45e84d759839d51ef9480dee~mv2.jpg/v1/fill/w_454,h_568,fp_0.50_0.50,q_90,enc_auto/7d8c70_95fabb9c45e84d759839d51ef9480dee~mv2.jpg",
          content:
            "Sri Lankan Chinese: Chop Suey Part 2.The written recipe for this on my old blog is slightly different to the version I make here. I promise I’ll update and upload the improved recipe to the new website soon!",
          createdAt: new Date(),
          updatedAt: new Date(),
          postId: 6,
        },
        {
          title: "Bunny chow",

          image:
            "https://www.196flavors.com/wp-content/uploads/2022/01/Bunny-Chow-1.jpg",
          content:
            "Hollowed out loaves of bread, stuffed with spicy curry were originally created by the immigrant Indian community in the Natal area of Durban and served to workers for lunch.",
          createdAt: new Date(),
          updatedAt: new Date(),
          postId: 17,
        },
        {
          title: "Chicken Stew",

          image:
            "https://carlsbadcravings.com/wp-content/uploads/2020/05/Chicken-Stew-v10.jpg",
          content:
            "There simply isn’t anything more comforting than a big bowl of hearty stew.  It’s like curling up with your favorite cozy blanket that warms you from the inside out with every heaping slurpful.",
          createdAt: new Date(),
          updatedAt: new Date(),
          postId: 18,
        },
        {
          title: "Creme Brulee",

          image:
            "https://simplyhomecooked.com/wp-content/uploads/2022/03/white-chocolate-creme-brulee-recipe.jpg",
          content:
            "White Chocolate Creme Brulee is one of my favorite desserts because of its contrasting textures and flavors. It also makes an excellent party dessert!",
          createdAt: new Date(),
          updatedAt: new Date(),
          postId: 19,
        },
        {
          title: "Birthday Cake",

          image:
            "https://i.pinimg.com/564x/c0/e0/46/c0e0460dbac985f60408b00fd678a099.jpg",
          content:
            "It was such catharsis to have been able to create this cake in the times of social distancing. Rich chocolate cake with a coffee buttercream. ",
          createdAt: new Date(),
          updatedAt: new Date(),
          postId: 20,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("photos", null, {});
  },
};
