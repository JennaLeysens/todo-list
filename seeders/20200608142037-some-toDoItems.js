"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("toDoItems", [
      {
        task: "Cooking",
        toDoListId: 1,
        deadline: "09/06/2020",
        important: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        task: "Learn databases",
        toDoListId: 3,
        deadline: "14/06/2020",
        important: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        task: "Meetings",
        toDoListId: 2,
        deadline: "09/06/2020",
        important: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("toDoItems", null, {});
  },
};
