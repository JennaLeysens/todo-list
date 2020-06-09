"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("itemTags", [
      { todoItemId: 2, tagId: 1, createdAt: new Date(), updatedAt: new Date() },
      { todoItemId: 2, tagId: 2, createdAt: new Date(), updatedAt: new Date() },
      { todoItemId: 2, tagId: 3, createdAt: new Date(), updatedAt: new Date() },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("itemTags", null, {});
  },
};
