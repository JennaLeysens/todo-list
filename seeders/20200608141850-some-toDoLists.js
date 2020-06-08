"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("toDoLists", [
      { name: "Personal", createdAt: new Date(), updatedAt: new Date() },
      { name: "Professional", createdAt: new Date(), updatedAt: new Date() },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("toDoLists", null, {});
  },
};
