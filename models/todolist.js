"use strict";
module.exports = (sequelize, DataTypes) => {
  const toDoList = sequelize.define(
    "toDoList",
    {
      name: DataTypes.STRING,
    },
    {}
  );
  toDoList.associate = function (models) {
    todoList.belongsTo(models.user);
  };
  return toDoList;
};
