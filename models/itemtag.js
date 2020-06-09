'use strict';
module.exports = (sequelize, DataTypes) => {
  const itemTag = sequelize.define('itemTag', {
    todoItemId: DataTypes.INTEGER,
    tagId: DataTypes.INTEGER
  }, {});
  itemTag.associate = function(models) {
    // associations can be defined here
  };
  return itemTag;
};