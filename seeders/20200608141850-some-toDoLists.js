"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("toDoLists", [
      {
        name: "Jen's Personal List",
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "JL's Professional  List",
        userId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Jen's Professional  List",
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("toDoLists", null, {});
  },
};
