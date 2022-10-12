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
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("users", null, {});
  },
};
