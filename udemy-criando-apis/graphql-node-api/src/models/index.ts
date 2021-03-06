import * as fs from 'fs';
import * as path from 'path';
import * as Sequelize from 'sequelize';
import { DbConnection } from '../interfaces/DbConnectionInterface';

//pega o nome do arquivo
const basename: string = path.basename(module.filename);

//pega o ambiente que estamos trabalhando
const env: string = process.env.NODE_ENV.trim() || 'development';

// lê as configurações do config.json do banco de dados
// add require pega como um objeto
// [env] pega o atributo da const env
let config = require(path.resolve(`${__dirname}./../config/config.json`))[env];

// trabalha com singleton, uma única instancia de banco de dados
let db = null;

if(!db){
  db = {};

    //desliga o operador
    const operatorsAliases = false;

    config = Object.assign({operatorsAliases}, config);

  const sequelize: Sequelize.Sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config // pega os dois ultimos itens
  );

  //vamos ler os models
  fs
    .readdirSync(__dirname) //array de string contendo o nome dos arrquivo que está dentro do arquivo
    // vamos remover alguns arquivos 
    .filter((file:string) => {
      return (file != basename); // tive que alterar para apenas ignorar o basefile pois o resto dos ifs estava dando erro e não entrava no foreach
    })
    // add o model no sequelize 
    .forEach((file:string) => {            
      const model = sequelize.import(path.join(__dirname, file));            
      db[model['name']] = model;
    });

    console.log(__dirname);

    //chamando as associacoes de cada model
    // array de string do nosso objeto
    Object.keys(db).forEach((modelName: string) => {
      if(db[modelName].associate){
        db[modelName].associate(db);
      }
    });

    //sincroniza o sequelize com o mysql
    db['sequelize'] = sequelize;
}

export default <DbConnection>db;
