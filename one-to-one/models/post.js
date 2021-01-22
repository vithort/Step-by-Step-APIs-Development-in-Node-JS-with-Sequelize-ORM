'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Post.hasMany(models.Comment); // a post has many comments
    }
  }
  Post.init(
    {
      name: DataTypes.STRING,
      context: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: 'Post',
      timestamps: false,
    }
  );
  return Post;
};
