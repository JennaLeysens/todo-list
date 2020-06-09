"use strict";
module.exports = (sequelize, DataTypes) => {
  const tag = sequelize.define(
    "tag",
    {
      title: DataTypes.STRING,
    },
    {}
  );
  tag.associate = function (models) {
    tag.belongsToMany(models.toDoItem, {
      through: "itemTags",
      foreignKey: "tagId",
    });
  };
  return tag;
};
