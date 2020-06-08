'use strict';
module.exports = (sequelize, DataTypes) => {
  const toDoList = sequelize.define('toDoList', {
    name: DataTypes.STRING
  }, {});
  toDoList.associate = function(models) {
    // associations can be defined here
  };
  return toDoList;
};