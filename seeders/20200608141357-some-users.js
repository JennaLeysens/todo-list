"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "users",
      [
        {
          name: "Jen Leysens",
          email: "jen@jen.com",
          phone: 1234567,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "JL Leysens",
          email: "jl@louis.com",
          phone: 1234568,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("users", null, {});
  },
};
