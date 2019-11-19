'use strict';

module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('Post', {
    text: DataTypes.TEXT,
    userId: DataTypes.INTEGER
  }, {})
  
  Post.associate = function(models) {
    // A post belongs to exactly one user
    Post.belongsTo(models.User)
  };
  return Post
}