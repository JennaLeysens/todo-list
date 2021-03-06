"use strict";
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define(
    "user",
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      phone: DataTypes.INTEGER,
    },
    {}
  );
  user.associate = function (models) {
    user.hasMany(models.toDoList);
  };
  return user;
};
