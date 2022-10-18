"use strict";
const bcrypt = require("bcrypt");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          firstName: "Chathu",
          lastName: "Weerasena",
          email: "chathu@chathu.com",
          password: bcrypt.hashSync("chathu", 10),
          image:
            "https://fastly.4sqi.net/img/user/130x130/PAWCHFXTFOCWR2XV.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "Kevin",
          lastName: "Cooray",
          email: "kevin@kevin.com",
          password: bcrypt.hashSync("kevin", 10),
          image:
            "https://i.pinimg.com/564x/27/32/05/273205ed65ce24340f3cb4aa59642855.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "Kate",
          lastName: "Hudson",
          email: "kate@kate.com",
          password: bcrypt.hashSync("kate", 10),
          image:
            "https://media.distractify.com/brand-img/BYpPbnB3S/1440x1093/kate-pearson-1616548948772.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "Lewis",
          lastName: "Hamilton",
          email: "lewis@lewis.com",
          password: bcrypt.hashSync("lewis", 10),
          image: "https://cdn.crash.net/styles/article/s3/pa/3223525.0064.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "Sav",
          lastName: "Perera",
          email: "sav@sav.com",
          password: bcrypt.hashSync("sav", 10),
          image:
            "https://i.pinimg.com/280x280_RS/04/5a/94/045a94df91c4549fd6d62f9da9dc6064.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "Randall",
          lastName: "Pearson",
          email: "randall@randall.com",
          password: bcrypt.hashSync("randall", 10),
          image:
            "https://i.pinimg.com/564x/66/50/4f/66504fac979b8a1cbd7862c08970bedd.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "Mandy",
          lastName: "Moore",
          email: "mandy@mandy.com",
          password: bcrypt.hashSync("mandy", 10),
          image:
            "https://upload.wikimedia.org/wikipedia/commons/9/9a/Mandy_Moore_at_SXSW_2018_%2825904503147%29_%28cropped%29.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "Charles",
          lastName: "Leclerc",
          email: "char@char.com",
          password: bcrypt.hashSync("charles", 10),
          image:
            "https://pbs.twimg.com/profile_images/1276567411240681472/8KdXHFdK_400x400.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "Mad Batter",
          lastName: "By Sav",
          email: "mad@mad.com",
          password: bcrypt.hashSync("mad", 10),
          image:
            "https://static.wixstatic.com/media/7d8c70_177278344ba14be9b535d49ae15183f7~mv2.jpg/v1/fill/w_257,h_247,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/16AAACBD-299D-4234-B196-B12EA795BB1F-B88A9167-DA23-49D9-9253-7A1F94F634C0.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "Mariano",
          lastName: "Ktchen",
          email: "mariano@mariano.com",
          password: bcrypt.hashSync("mariano", 10),
          image:
            "https://cdn.shopify.com/s/files/1/0595/1547/0015/products/MG83.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("users", null, {});
  },
};
