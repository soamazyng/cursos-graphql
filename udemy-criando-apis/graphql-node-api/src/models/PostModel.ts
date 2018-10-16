import * as Sequelize from "sequelize";
import { BaseModelInterface } from "../interfaces/BaseModelInterface";
import { ModelsInterface } from "../interfaces/ModelsInterface";

export interface PostAttibutes{
  id?:number;
  title?: string;
  content?: string;
  photo?: string;
  author?: number;
  createdAt?: string;
  updatedAt?: string;
}

export interface PostInstance extends Sequelize.Instance<PostAttibutes>{}

export interface PostModel extends BaseModelInterface, Sequelize.Model<PostInstance, PostAttibutes>{}

export default (sequelize: Sequelize.Sequelize, DataTypes: Sequelize.DataTypes): PostModel => {

  const Post: PostModel = sequelize.define('Post', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    photo: {
      type: DataTypes.BLOB({
        length: 'long'
      }),
      allowNull: false
    }
  },{
    tableName: 'posts'
  });

  //associa ele ao user model
  Post.associate = (models: ModelsInterface) : void => {
    //pertence há
    Post.belongsTo(models.User, {
      foreignKey: {
        allowNull: false,
        field: 'author',
        name: 'author'
      }
    });
  }; 

  return Post;

}