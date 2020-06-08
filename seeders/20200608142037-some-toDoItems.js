"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("toDoItems", [
      {
        task: "Cooking",
        deadline: "09/06/2020",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        task: "Learn databases",
        deadline: "14/06/2020",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("toDoItems", null, {});
  },
};
