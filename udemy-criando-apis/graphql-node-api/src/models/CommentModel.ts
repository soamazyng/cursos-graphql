import * as Sequelize from "sequelize";
import sequelize = require("sequelize");
import { BaseModelInterface } from "../interfaces/BaseModelInterface";
import { ModelsInterface } from "../interfaces/ModelsInterface";

export interface CommentAttibutes{
  id?: number;
  comment?: string;
  post?: number;
  user?:number;
  createdAt?:string;
  updatedAt?:string;
}

export interface CommentInstance extends Sequelize.Instance<CommentAttibutes>{}

export interface CommentModel extends BaseModelInterface, Sequelize.Model<CommentInstance, CommentAttibutes>{}

export default (sequelize: Sequelize.Sequelize, DataTypes: Sequelize.DataTypes) : CommentModel => {

  const Comment: CommentModel = sequelize.define('Comment', {

    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    comment: {
      type: DataTypes.TEXT,
      allowNull: false
    }

  }, {
    tableName: 'commments';
  });

  Comment.associate = (models: ModelsInterface): void => {

    Comment.belongsTo(models.Post, {
      foreignKey: {
        allowNull: false,
        field: 'post',
        name: 'post'
      }
    });

    Comment.belongsTo(models.User, {
      foreignKey: {
        allowNull: false,
        field: 'user',
        name: 'user'
      }
    });

  };

  return Comment;

};