"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("tags", [
      { title: "Urgent", createdAt: new Date(), updatedAt: new Date() },
      { title: "Work things", createdAt: new Date(), updatedAt: new Date() },
      {
        title: "Personal things",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("tags", null, {});
  },
};
