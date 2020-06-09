'use strict';
module.exports = (sequelize, DataTypes) => {
  const tag = sequelize.define('tag', {
    title: DataTypes.STRING
  }, {});
  tag.associate = function(models) {
    // associations can be defined here
  };
  return tag;
};