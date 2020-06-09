"use strict";
module.exports = (sequelize, DataTypes) => {
  const toDoItem = sequelize.define(
    "toDoItem",
    {
      task: DataTypes.STRING,
      deadline: DataTypes.STRING,
      important: DataTypes.BOOLEAN,
    },
    {}
  );
  toDoItem.associate = function (models) {
    toDoItem.belongsTo(models.toDoList);
  };
  return toDoItem;
};
