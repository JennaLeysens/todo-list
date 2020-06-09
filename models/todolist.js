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
    toDoList.belongsTo(models.user);
    toDoList.hasMany(models.toDoItem);
  };
  return toDoList;
};
