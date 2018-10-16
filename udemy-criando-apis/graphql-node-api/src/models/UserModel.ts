import * as Sequelize from "sequelize";
import { BaseModelInterface } from "../interfaces/BaseModelInterface";
import { genSaltSync, hashSync, compareSync, compare} from 'bcryptjs';

export interface UserAttributes{
  id?: number;
  name?:string;
  email?:string;
  password?:string;
  photo?:string;
  createdAt?: string;
  updatedAt?: string;
}

//sera utilizada quando estiver trabalhando com uma instância do tipo user
// Instance<UserAttributes> métodos de instancia do nosso registro
export interface UserInstance extends Sequelize.Instance<UserAttributes>, UserAttributes{
  isPassword(encodedPassword: string, password: string): boolean;
}

// fazer as queries do banco de dados
export interface UserModel extends BaseModelInterface, Sequelize.Model<UserInstance, UserAttributes>{}

export default (sequelize: Sequelize.Sequelize, DataTypes: Sequelize.DataTypes) : UserModel =>{

  const User: UserModel = 
    sequelize.define('User', {
      id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: DataTypes.STRING(128),
        allowNull: false
      },
      email: {
        type: DataTypes.STRING(128),
        allowNull: false,
        unique: true
      },
      password: {
        type: DataTypes.STRING(1258),
        allowNull: false,
        validate: {
          notEmpty: true
        }
      },
      photo: {
        type: DataTypes.BLOB({
          length: 'long'
        }),
        allowNull: true,
        defaultValue: null
      }
    },{
      tableName: 'users',
      //trigger
      hooks: {
        //neste momento vamos criptografar a senha do usuário antes de salvar um usuário
        beforeCreate: (user: UserInstance, options: Sequelize.CreateOptions):void =>{
          const salt = genSaltSync(); //valor randomico para add a hash do user
          user.password = hashSync(user.password, salt); // o resultado é a senha criptografada
        }
      }
    });

    //prototype define um método de instancia
    User.prototype.isPassword = (encodedPassword: string, password: string): boolean =>{
      return compareSync(password, encodedPassword);
    }

    return User;

}