import * as express from "express"; // importa do pacote express tudo que tem lá, e criando um alias chamado express
import * as graphqlHTTP from "express-graphql";

import db from "./models";
import schema from "./graphql/schema";

class App {

  public express: express.Application;

  constructor(){
    this.express = express();
    this.middleware();
  }

  private middleware (): void {
    this.express.use('/graphql',
    (req, res, next) => {
      req['contex'] = {};
      req['contex'].db = db;
      next();
    },
    graphqlHTTP((req) => ({
      schema : schema, 
      graphiql: process.env.NODE_ENV.trim() === "development",
      context: req['context']      
    })));
  }
}

export default new App().express;